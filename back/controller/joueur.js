const User = require("../models/User");
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

	const email = decoded.email;
	const { password, nom, prenom, dateNaissance } = req.body;

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
				email: decoded.email,
				password: req.body.password,
				nom: req.body.nom,
				prenom: req.body.prenom,
				dateNaissance: req.body.dateNaissance,
				telephone: req.body.telephone,
				poids: req.body.poids,
				taille: req.body.taille,
				IMC: req.body.IMC,
				role: "Joueur",
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
				ville: user.ville,

				firstAuth: "true",
				role: user.role,
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

// // affichage du profil d'un joueur
// exports.showProfile = (req, res) => {
//   const token = req.params.token;
//   var decoded = jwt_decode(token);

//   if (decoded.role === "Joueur") {
//   User.findOne({ _id: decoded.user_id })
//   .then((data) => res.json({
//     id: data.id,
//     email: data.email,
//     password: data.password,
//     nom: data.nom,
//     prenom: data.prenom,
//     dateDeNaissance: data.dateDeNaissance,
//     lieuDeNaissance: data.lieuDeNaissance,
// //   photoDeProfil: data.photoDeProfil,
//     telephone: data.telephone,
//     sexe: data.sexe,
//     poids: data.poids,
//     taille: data.taille,
//     IMC: data.IMC,
//     main: data.main,
//     ville: data.ville,
//     type: data.type,
//     typeEtablissement: data.typeEtablissement,
//     nombreSeance: data.nombreSeance,
//     prixSeance: data.prixSeance,
//     etat: data.etat,
// }))
//   .catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "Error"
//     });
//   });
// } else {
//   res.status(401).send({
//     message: "Unauthorized"
//   })
// }
// };

// // parametrage du compte joueur
// exports.editProfile = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update cannot be empty!"
//     });
//   }

//   const token = req.params.token;
//   var decoded = jwt_decode(token);

//   if (decoded.role === "Joueur") {
//   User.findOneAndUpdate(
//     { _id: decoded.user_id },
//     {
//         email: decoded.email,
//         password: req.body.password,
//         nom: req.body.nom,
//         prenom: req.body.prenom,
//         dateDeNaissance: req.body.dateDeNaissance,
//         lieuDeNaissance: req.body.lieuDeNaissance,
//         telephone: req.body.telephone,
//         sexe: req.body.sexe,
//         poids: req.body.poids,
//         taille: req.body.taille,
//         IMC: req.body.IMC,
//         main: req.body.main,
//         ville: req.body.ville,
//         type: req.body.type,
//         typeEtablissement: req.body.typeEtablissement,
//         nombreSeance: req.body.nombreSeance,
//         prixSeance: req.body.prixSeance,
//         etat: req.body.etat,
//     },
//     { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update this profile with id=${id} `
//         });
//       } else res.send({ message: "Profile updated" });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating profile with id=" + id
//       });
//     });
//     } else {
//       res.status(401).send({
//         message: "Unauthorized"
//       })
//   }
//   };
