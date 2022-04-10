const router = require("express").Router();
const seance = require("../models/seance");
var nodemailer = require("nodemailer");
const User = require("../models/User");
const cron = require("node-cron");

var transporter = nodemailer.createTransport({
	service: "outlook",
	auth: {
		user: "projet.sporti@outlook.fr",
		pass: "ProjetSporti",
	},
});
//CREATE  séance
router.post("/", async (req, res) => {
	const newSeance = new seance(req.body);
	try {
		const savedSeance = await newSeance.save();
		res.status(200).json(savedSeance);
	} catch (err) {
		res.status(500).json(err);
	}

	const joueur = await User.findById(req.body.prenom);
	var mailOptions = {
		from: "Sporti",
		to: joueur.email,
		subject: "Sport",
		text: ` vous avez une séance de sport demain  à  ${req.body.horaire} `,
	};
	var date = new Date(req.body.jour);
	const dateD = date.getDate() - 1;
	const dateM = date.getMonth();
	cron.schedule(`0 0 8 ${dateD} ${dateM}  *`, () => {
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});
	});
});
//UPDATE  séance
router.put("/:id", async (req, res) => {
	try {
		const updatedSeance = await seance.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedSeance);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE  séance
router.delete("/:id", async (req, res) => {
	try {
		await seance.findByIdAndDelete(req.params.id);
		res.status(200).json("séance has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET  séance
router.get("/:id", async (req, res) => {
	try {
		const MySeance = await seance.find(req.params.id);
		res.status(200).json(MySeance);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
