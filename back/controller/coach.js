/* eslint-disable no-mixed-spaces-and-tabs */
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passwordRegex = new RegExp(
	"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,24})"
);
const jwt_decode = require("jwt-decode");
// inscription coach
exports.register = async (req, res) => {
	var response = {};

	const { email, password, nom, prenom } = req.body;

	if (!(email && password && nom && prenom)) {
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
				role: "Coach",
				abonnement: "Free",
				lastAuthentication: Date.now(),
			});

			const accessToken = jwt.sign(
				{
					user_id: user._id,
					email,
					role: user.role,
					abonnement: user.abonnement,
				},
				process.env.TOKEN_KEY,
				{ expiresIn: "2h" }
			);

			await user.save();

			response.msg = "Account created!";
			response.data = {
				id: user.id,
				email: user.email,
				nom: user.nom,
				prenom: user.prenom,
				role: user.role,
				abonnement: user.abonnement,
				dateNaissance: user.dateNaissance,
				lastAuthentication: user.lastAuthentication,
				firstAuth: "true",
				token: accessToken,
			};
			res.send(response);
		} else {
			response.msg = "Account already exist. Please Login";
			res.send(response);
		}
	}
};
// login coach
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
			if (bcrypt.compare(password, user.password)) {
				response.msg = "Account found";
				const accessToken = jwt.sign(
					{ user_id: user._id, email, role: user.role },
					process.env.TOKEN_KEY,
					{ expiresIn: "2h" }
				);
				response.data = {
					id: user.id,
					email: user.email,
					nom: user.nom,
					prenom: user.prenom,
					role: user.role,
					abonnement: user.abonnement,
					lastAuthentication: user.lastAuthentication,
					firstAuth: "false",
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

// affichage les joueurs d'un coach
exports.playersList = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);

	if (decoded.role === "Coach") {
		User.find({ coach: decoded.user_id })
			.then((data) => res.json(data))
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
// affichage un joueur d'un coach par ID
module.exports.readPlayer = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);
	if (decoded.role === "Coach") {
		User.find({ _id: req.params.id })
			.then((data) => res.json(data))
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
// affichage du profil d'un coach
exports.showProfile = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);

	if (decoded.role === "Coach") {
		User.findOne({ _id: decoded.user_id })
			.then((data) =>
				res.json({
					id: data.id,
					email: data.email,
					nom: data.nom,
					prenom: data.prenom,
					dateNaissance: data.dateNaissance,
					createdAt: data.createdAt,
					updatedAt: data.updatedAt,
					telephone: data.telephone,
					abonnement: data.abonnement,
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
//abonnement du compte coach
exports.abonnement = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Data to update cannot be empty!",
		});
	}

	const token = req.params.token;
	var decoded = jwt_decode(token);

	if (decoded.role === "Coach") {
		User.findOneAndUpdate(
			{ _id: decoded.user_id },
			{
				abonnement: req.body.abonnement,
			},
			{ useFindAndModify: false }
		)
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Abonnement nom payé avec id=${data.id} `,
					});
				} else res.send({ message: " Success Abonnement " });
			})
			.catch(() => {
				res.status(500).send({
					message: `Error abonnement`,
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};

exports.update = ( async (req, res) => {
	try {
		const updatedDiscipline = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedDiscipline);
	} catch (err) {
		res.status(500).json(err);
	}
});
// exports.updateAbonnement = async (req, res, next) => {
// 	const { abonnement } = req.body;
// 	if (!abonnement) {
// 		// eslint-disable-next-line no-undef
// 		return next(newErrorResponse("all input are required", 400));
// 	}
// 	let FieldToUpdate = {};
// 	if (abonnement === "Free")
// 		FieldToUpdate = { abonnement: "Free", inviteNumber: 3 };
// 	else if (abonnement === "Basic")
// 		FieldToUpdate = { abonnement: "Basic", inviteNumber: 10 };
// 	else if (abonnement === "Premium")
// 		FieldToUpdate = { abonnement: "Premium", inviteNumber: 1000 };
// 	const updatedAbonnement = await User.findByIdAndUpdate(
// 		req.params.userId,
// 		FieldToUpdate,
// 		{ new: true, runValidators: true }
// 	);
// 	if (updatedAbonnement) {
// 		return res.status(200).json({
// 			data: updatedAbonnement,
// 			type: "success",
// 			message: " update abonnement success",
// 		});
// 	}
// 	// eslint-disable-next-line no-undef
// 	return next(new newErrorResponse("update failed", 500));
// };

// parametrage du compte coach
exports.editProfile = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Data to update cannot be empty!",
		});
	}

	const token = req.params.token;
	var decoded = jwt_decode(token);

	if (decoded.role === "Coach") {
		User.findOneAndUpdate(
			{ _id: decoded.user_id },
			{
				email: req.body.email,
				nom: req.body.nom,
				prenom: req.body.prenom,
				dateDeNaissance: req.body.dateDeNaissance,
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
			.catch(() => {
				res.status(500).send({
					message: "Error updating profile with id=",
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
