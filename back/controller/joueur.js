const User = require("../models/User");
const Seance = require("../models/seance");
const jwt = require("jsonwebtoken");
const passwordRegex = new RegExp(
	"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,24})"
);
const jwt_decode = require("jwt-decode");

// inscription joueur
exports.register = async (req, res) => {
	var response = {};
	const token = req.params.token;

	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		response.msg = "Invalid token format";
		res.send(response);
		return true;
	}

	// const email = decoded.email;
	const { email, password, nom, prenom, dateNaissance } = req.body;

	if (Math.round(Date.now() / 1000) >= decoded.exp) {
		response.msg = "Token expired";
		res.send(response);
		return true;
	}

	if (!(password && nom && prenom && dateNaissance)) {
		response.msg = "All input is required";
		res.send(response);
	} else {
		const oldUser = await User.findOne({ email });
		if (!oldUser) {
			if (!passwordRegex.test(password)) {
				response.msg = "Unsafe password";
				res.send(response);
				return;
			}

			const user = new User({
				email: req.body.email,
				password: req.body.password,
				nom: req.body.nom,
				prenom: req.body.prenom,
				dateNaissance: req.body.dateNaissance,
				telephone: req.body.telephone,
				droit: req.body.droit,
				poids: req.body.poids,
				taille: req.body.taille,
				IMC: req.body.IMC,
				role: "Joueur",
				coach: decoded.user_id,
				lastAuthentication: Date.now(),
			});

			const accessToken = jwt.sign(
				{ user_id: user._id, email, role: user.role },
				process.env.TOKEN_KEY,
				{ expiresIn: "2h" }
			);

			await user.save();

			response.msg = "Account created";
			response.data = {
				id: user.id,
				email: user.email,
				password: user.password,
				nom: user.nom,
				prenom: user.prenom,
				dateNaissance: user.dateNaissance,
				telephone: user.telephone,
				poids: user.poids,
				taille: user.taille,
				IMC: user.IMC,
				firstAuth: "true",
				role: user.role,
				coach: user.coach,
				token: accessToken,
			};
			res.send(response);
		} else {
			response.msg = "Account already exist. Please Login";
			res.send(response);
		}
	}
};

// login joueur
exports.login = async (req, res) => {
	var response = {};

	try {
		const { email, password } = req.body;

		if (!(email && password)) {
			response.msg = "All input is required";
			res.send(response);
		}

		const user = await User.findOne({ email });

		if (user != null) {
			user.lastAuthentication = Date.now();
			if (password === user.password) {
				response.msg = "Account found";

				const accessToken = jwt.sign(
					{ user_id: user._id, email },
					process.env.TOKEN_KEY,
					{ expiresIn: "2h" }
				);

				response.data = {
					id: user.id,
					email: user.email,
					password: user.password,
					nom: user.nom,
					prenom: user.prenom,
					dateNaissance: user.dateNaissance,
					telephone: user.telephone,
					poids: user.poids,
					taille: user.taille,
					IMC: user.IMC,
					coach: user.coach,
					lastAuthentication: user.lastAuthentication,
					firstAuth: "false",
					role: user.role,
					token: accessToken,
				};

				res.send(response);
			} else {
				response.msg = "Email or password incorrect";
				res.send(response);
			}
		}
	} catch (err) {
		console.log(err);
	}
};

// affichage du profil d'un joueur
exports.showProfile = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);

	if (decoded.role === "Joueur") {
		User.findOne({ _id: decoded.user_id })
			.then((data) =>
				res.json({
					id: data.id,
					email: data.email,
					password: data.password,
					nom: data.nom,
					prenom: data.prenom,
					telephone: data.telephone,
					poids: data.poids,
					taille: data.taille,
					IMC: data.IMC,
					droit: data.droit,
				})
			)
			.catch((err) => {
				res.status(500).send({
					message: err.message || "Error",
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};

// parametrage du compte joueur
exports.editProfile = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Data to update cannot be empty!",
		});
	}

	const token = req.params.token;
	var decoded = jwt_decode(token);

	if (decoded.role === "Joueur") {
		User.findOneAndUpdate(
			{ _id: decoded.user_id },
			{
				email: decoded.email,
				password: req.body.password,
				nom: req.body.nom,
				prenom: req.body.prenom,
				telephone: req.body.telephone,
				poids: req.body.poids,
				taille: req.body.taille,
				IMC: req.body.IMC,
				droit: req.body.droit,
			},
			{ useFindAndModify: false }
		)
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Cannot update this profile `,
					});
				} else res.send({ message: "Profile updated" });
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || "Error updating profile",
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
// afficher les séances d'aujourd'hui (joueur)
exports.findSeanceNowPlayer = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);

	//date d'aujourd'hui
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + "-" + mm + "-" + dd + "T00:00:00.000+00:00";

	Seance.find({
		joueur: decoded.user_id,
		date: today,
	})
		.populate("lieuEntrainement")
		.populate("joueur")
		.populate("programmeSeance")
		.populate("createdBy")
		.then((data) => res.json(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Error",
			});
		});
};
