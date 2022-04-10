const Invitation = require("../models/invitation");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
	service: "outlook",
	auth: {
		user: "projet.sporti@outlook.fr",
		pass: "ProjetSporti",
	},
});
exports.inviterJoueur = async (req, res) => {
	var response = {};

	const { email, nom, prenom, telephone } = req.body;

	if (!(email && nom && prenom && telephone)) {
		response.code = 1;
		response.msg = "All input is required";
		res.send(response);
	} else {
		const oldUser = await User.findOne({ email });
		if (!oldUser) {
			const invitation = new Invitation({
				email: req.body.email,
				nom: req.body.nom,
				prenom: req.body.prenom,
				telephone: req.body.telephone,
			});

			const token = jwt.sign(
				{ user_id: invitation._id, email },
				process.env.TOKEN_KEY,
				{ expiresIn: "2h" }
			);

			invitation.token = token;

			await invitation.save();

			response.code = 0;
			response.msg = "Invitation created!";
			response.data = {
				id: invitation.id,
				email: invitation.email,
				nom: invitation.nom,
				prenom: invitation.prenom,
				telephone: invitation.telephone,
				token: invitation.token,
			};
			res.send(response);

			var mailOptions = {
				from: "Sporti",
				to: invitation.email,
				subject: "Invitation to Sporti",
				text: ` Welcome ${invitation.nom} ${invitation.prenom} tel = ${invitation.telephone}
					click here to subscribe http://localhost:3000/inviter/joueur/${invitation.token}`,
			};
			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log("Email sent: " + info.response);
				}
			});
		} else {
			response.code = 2;
			response.msg = "Account already exist";
			res.send(response);
		}
	}
};
