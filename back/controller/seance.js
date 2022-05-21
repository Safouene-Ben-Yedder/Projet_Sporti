const Seance = require("../models/seance");
const jwt_decode = require("jwt-decode");
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
				nom: req.body.nom,
				date: req.body.date,
				description: req.body.description,
				joueur: req.body.joueur,
				objectif: req.body.objectif,
				programmeSeances: req.body.programmeSeances,
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
// annuler une séance créée par le coach par son ID (coach)
exports.annulerSeance = (req, res) => {
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
		annuler: req.body.annuler,
		},
		{ useFindAndModify: false }
	)
		.then((data) => {
		if (!data) {
			res.status(404).send({
			message: `Vous ne pouvez pas annuler cette seance avec id=${id}`,
			});
		} else res.send({ message: "Seance annulée" });
		})
		.catch((error) => {
		res.status(500).send({
			message: error+ "Error with id=" + id,
		});
		});
	} else {
	res.status(401).send({
		message: "Unauthorized",
	});
	}
};
  
  // annuler une séance créée par le coach par son ID (coach)
  exports.feedBackSeance = (req, res) => {
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
	objectifAtteint: req.body.objectifAtteint,
		feedback: req.body.feedback,
		},
		{ useFindAndModify: false }
	)
		.then((data) => {
		if (!data) {
			res.status(404).send({
		message: `Vous ne pouvez pas donner un feedback dans cette seance avec id=${id}`,
		});
		} else res.send({ message: "Feedback ajouté" });
		})
		.catch(() => {
		res.status(500).send({
			message: "Error with id=" + id,
		});
		});
	} else {
	res.status(401).send({
		message: "Unauthorized",
	});
	}
  };