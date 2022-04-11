// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const passwordRegex = new RegExp(
// 	"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,24})"
// );
// const jwt_decode = require("jwt-decode");

// // inscription joueur
// exports.register = async (req, res) => {
// 	var response = {};
// 	const token = req.params.token;

// 	try {
// 		var decoded = jwt_decode(token);
// 	} catch (error) {
// 		response.msg = "Invalid token format";
// 		res.send(response);
// 		return true;
// 	}

// 	const email = decoded.email;
// 	const { password, nom, prenom, dateDeNaissance } = req.body;

// 	if (Math.round(Date.now() / 1000) >= decoded.exp) {
// 		response.msg = "Token expired";
// 		res.send(response);
// 		return true;
// 	}

// 	if (!(password && nom && prenom && dateDeNaissance)) {
// 		response.msg = "All input is required";
// 		res.send(response);
// 	} else {
// 		const oldUser = await User.findOne({ email });
// 		if (!oldUser) {
// 			if (!passwordRegex.test(password)) {
// 				response.msg = "Unsafe password";
// 				res.send(response);
// 				return;
// 			}

// 			const user = new User({
// 				email: decoded.email,
// 				password: req.body.password,
// 				nom: req.body.nom,
// 				prenom: req.body.prenom,
// 				dateDeNaissance: req.body.dateDeNaissance,
// 				telephone: req.body.telephone,
// 				poids: req.body.poids,
// 				taille: req.body.taille,
// 				IMC: req.body.IMC,
// 				droit: req.body.droit,
// 				prixSeance: req.body.prixSeance,
// 				role: "Joueur",
// 				lastAuthentication: Date.now(),
// 			});

// 			const accessToken = jwt.sign(
// 				{ user_id: user._id, email, role: user.role },
// 				process.env.TOKEN_KEY,
// 				{ expiresIn: "2h" }
// 			);

// 			await user.save();

// 			response.msg = "Account created";
// 			response.data = {
// 				id: user.id,
// 				email: user.email,
// 				password: user.password,
// 				nom: user.nom,
// 				prenom: user.prenom,
// 				dateDeNaissance: user.dateDeNaissance,
// 				telephone: user.telephone,
// 				sexe: user.sexe,
// 				poids: user.poids,
// 				taille: user.taille,
// 				IMC: user.IMC,
// 				droit: req.body.droit,
// 				prixSeance: user.prixSeance,
// 				firstAuth: "true",
// 				role: user.role,
// 				token: accessToken,
// 			};
// 			res.send(response);
// 		} else {
// 			response.msg = "Account already exist. Please Login";
// 			res.send(response);
// 		}
// 	}
// };

// // login joueur
// exports.login = async (req, res) => {
// 	var response = {};

// 	try {
// 		const { email, password } = req.body;

// 		if (!(email && password)) {
// 			response.msg = "All input is required";
// 			res.send(response);
// 		}

// 		const user = await User.findOne({ email });

// 		if (user != null) {
// 			user.lastAuthentication = Date.now();
// 			if (bcrypt.compare(password, user.password)) {
// 				response.msg = "Account found";

// 				const accessToken = jwt.sign(
// 					{ user_id: user._id, email },
// 					process.env.TOKEN_KEY,
// 					{ expiresIn: "2h" }
// 				);

// 				response.data = {
// 					id: user.id,
// 					email: user.email,
// 					password: user.password,
// 					nom: user.nom,
// 					prenom: user.prenom,
// 					dateDeNaissance: user.dateDeNaissance,
// 					telephone: user.telephone,
// 					poids: user.poids,
// 					taille: user.taille,
// 					IMC: user.IMC,
// 					prixSeance: user.prixSeance,
// 					lastAuthentication: user.lastAuthentication,
// 					firstAuth: "false",
// 					role: user.role,
// 					token: accessToken,
// 				};

// 				res.send(response);
// 			} else {
// 				response.msg = "Email or password incorrect";
// 				res.send(response);
// 			}
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// // affichage du profil d'un joueur
// exports.showProfile = (req, res) => {
// 	const token = req.params.token;
// 	var decoded = jwt_decode(token);

// 	if (decoded.role === "Joueur") {
// 		User.findOne({ _id: decoded.user_id })
// 			.then((data) =>
// 				res.json({
// 					id: data.id,
// 					email: data.email,
// 					password: data.password,
// 					nom: data.nom,
// 					prenom: data.prenom,
// 					dateDeNaissance: data.dateDeNaissance,
// 					telephone: data.telephone,
// 					poids: data.poids,
// 					taille: data.taille,
// 					IMC: data.IMC,
// 					prixSeance: data.prixSeance,
// 					etat: data.etat,
// 				})
// 			)
// 			.catch((err) => {
// 				res.status(500).send({
// 					message: err.message || "Error",
// 				});
// 			});
// 	} else {
// 		res.status(401).send({
// 			message: "Unauthorized",
// 		});
// 	}
// };

// // parametrage du compte joueur
// // exports.editProfile = (req, res) => {
// // 	if (!req.body) {
// // 		return res.status(400).send({
// // 			message: "Data to update cannot be empty!",
// // 		});
// // 	}

// // 	const token = req.params.token;
// // 	var decoded = jwt_decode(token);

// // 	if (decoded.role === "Joueur") {
// // 		User.findOneAndUpdate(
// // 			{ _id: decoded.user_id },
// // 			{
// // 				email: decoded.email,
// // 				password: req.body.password,
// // 				nom: req.body.nom,
// // 				prenom: req.body.prenom,
// // 				dateDeNaissance: req.body.dateDeNaissance,
// // 				telephone: req.body.telephone,
// // 				poids: req.body.poids,
// // 				taille: req.body.taille,
// // 				IMC: req.body.IMC,
// // 				type: req.body.type,
// // 				prixSeance: req.body.prixSeance,
// // 			},
// // 			{ useFindAndModify: false }
// // 		)
// // 			.then((data) => {
// // 				if (!data) {
// // 					res.status(404).send({
// // 						message: `Cannot update this profile with id=${id} `,
// // 					});
// // 				} else res.send({ message: "Profile updated" });
// // 			})
// // 			.catch((err) => {
// // 				res.status(500).send({
// // 					message: "Error updating profile with id=" + id,
// // 				});
// // 			});
// // 	} else {
// // 		res.status(401).send({
// // 			message: "Unauthorized",
// // 		});
// // 	}
// // };
