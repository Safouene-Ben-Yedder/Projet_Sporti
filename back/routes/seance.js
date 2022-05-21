const router = require("express").Router();
const Seance = require("../controller/seance");
const seance = require("../models/seance");
//var nodemailer = require("nodemailer");
//const User = require("../models/User");
//const cron = require("node-cron");

router.put("/update/:token/:id", Seance.update);
router.get("/today/:token", Seance.findSeanceNowPlayer);
router.get("/all/:token", Seance.findAllSeancePlayer);
router.get("/detail/:token/:id", Seance.findSeancePlayer);

router.post("/:token", seance.create);
router.put("/update/:token/:id", seance.update);
router.get("/findAll/:token/", seance.findAll);
router.delete("/delete/:token/:id", seance.delete);
router.get("/find/:token/:id", seance.find);

/*
var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "projet.sporti9@gmail.com",
		pass: "ProjetSporti9-",
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
// router.put("/:id", async (req, res) => {
// 	try {
// 		const updatedSeance = await seance.findByIdAndUpdate(
// 			req.params.id,
// 			{
// 				$set: req.body,
// 			},
// 			{ new: true }
// 		);
// 		res.status(200).json(updatedSeance);
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });
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
		const MySeance = await seance.findById(req.params.id);
		res.status(200).json(MySeance);
	} catch (err) {
		res.status(500).json(err);
	}
}); */
module.exports = router;
