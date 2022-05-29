const Seance = require("../models/seance");
const jwt_decode = require("jwt-decode");

//CREATE Seance
exports.create = (req, res) => {
	const token = req.params.token;

	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}
	console.log("ajout ...");
	if (decoded.role === "Coach") {
		const seance = new Seance({
			titre: req.body.titre,
			date: req.body.date,
			description: req.body.description,
			joueur: req.body.joueur,
			objectif: req.body.objectif,
			lieuentrainements: req.body.lieuentrainements,
			programmeSeances: req.body.programmeSeances,
			competences: req.body.competences,
			stats: req.body.stats,
			createdBy: decoded.user_id,
		});

		seance
			.save()
			.then((data) => {
				res.send(data);
			})
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

// modifier une séance créée par le coach par son ID (coach)
exports.update = (req, res) => {
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}

	if (!req.body) {
		return res.status(400).send({
			message: "Data to update can not be empty!",
		});
	}
	const id = req.params.id;

	if (decoded.role === "Coach") {
		Seance.findOneAndUpdate(
			{ _id: req.params.id, createdBy: decoded.user_id },
			{
				titre: req.body.titre,
				date: req.body.date,
				description: req.body.description,
				joueur: req.body.joueur,
				objectif: req.body.objectif,
				lieuentrainements: req.body.lieuentrainements,
				programmeSeances: req.body.programmeSeances,
				competences: req.body.competences,
				stats: req.body.stats,
				createdBy: decoded.user_id,
			},
			{ useFindAndModify: false }
		)
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Cannot update Seance with id=${id}. Maybe Seance was not found!`,
					});
				} else res.send({ message: "Seance was updated successfully." });
			})
			.catch(() => {
				res.status(500).send({
					message: "Error updating Seance with id=" + id,
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
		.populate("lieuentrainements")
		.populate("joueur")
		.populate("programmeSeances")
		.then((data) => res.json(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Error",
			});
		});
};
// afficher le détail d'une séance (joueur)
exports.findSeancePlayer = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);

	Seance.find({ _id: req.params.id, joueur: decoded.user_id })
		.populate("lieuentrainements")
		.populate("joueur")
		.populate("programmeSeances")
		.exec()
		.then((data) => res.json(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Error",
			});
		});
};
// afficher tous les séances du joueur (joueur)
exports.findAllSeancePlayer = (req, res) => {
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}

	console.log("Seance find all");
	Seance.find({ joueur: decoded.user_id });
	var total = Seance.count();
	Seance.find()
		.populate("lieuentrainements")
		.populate("joueur")
		.populate("programmeSeances")
		.exec()
		.then((data) => {
			res.set("Access-Control-Expose-Headers", "X-Total-Count");
			res.set("X-Total-Count", total);
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Error",
			});
		});
};

// //DELETE Seance
exports.delete = (req, res) => {
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}

	const id = req.params.id;

	if (decoded.role === "Coach") {
		Seance.findOneAndRemove({
			_id: req.params.id,
			createdBy: decoded.user_id,
		})
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Cannot delete Seance with id=${id}. Maybe Seance was not found!`,
					});
				} else {
					res.send({
						message: "Seance was deleted successfully!",
					});
				}
			})
			.catch(() => {
				res.status(500).send({
					message: "Could not delete Seance with id=" + id,
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
