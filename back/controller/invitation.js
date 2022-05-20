const Invitation = require("../models/invitation");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "projet.sporti9@gmail.com",
		pass: "ProjetSporti9-",
	},
});
exports.inviterJoueur = async (req, res) => {
	var response = {};
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}
	if (decoded.role === "Coach") {
		const { nom, prenom, email, tel } = req.body;

		if (!(nom && prenom && email && tel)) {
			response.code = 1;
			response.msg = "All input is required";
			res.send(response);
		} else {
			const oldUser = await User.findOne({ email });
			if (!oldUser) {
				const invitation = new Invitation({
					nom: req.body.nom,
					prenom: req.body.prenom,
					email: req.body.email,
					tel: req.body.tel,
				});

				const token = jwt.sign(
					{ user_id: invitation._id, email, nom, prenom, tel },
					process.env.TOKEN_KEY,
					{ expiresIn: "2h" }
				);

				invitation.token = token;

				await invitation.save();

				response.code = 0;
				response.msg = "Invitation created!";
				response.data = {
					id: invitation.id,
					nom: invitation.nom,
					prenom: invitation.prenom,
					email: invitation.email,
					tel: invitation.tel,
					token: invitation.token,
				};
				res.send(response);

				var mailOptions = {
					from: "Sporti",
					to: invitation.email,
					subject: "Invitation to Sporti",
					text: ` Welcome ${invitation.nom} ${invitation.prenom} ,
You are invited to Sporti
click here to subscribe : http://localhost:3000/inviter/joueur/${invitation.token}`,
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
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
