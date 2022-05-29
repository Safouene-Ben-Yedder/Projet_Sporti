const Defi = require("../models/defi");
const jwt_decode = require("jwt-decode");
const mongoose = require("mongoose");

//fetch defi
exports.findAll = (req, res) => {
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}

	Defi.find({ createdBy: decoded.user_id });
	var total = Defi.count();
	Defi.find({ createdBy: decoded.user_id })
		.populate("createdBy")
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
//CREATE Defi
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
		const defi = new Defi({
			nom: req.body.nom,
			description: req.body.description,
			lienVideo: req.body.lienVideo,
			objectif: req.body.objectif,
			date: null,
			joueurs: null,
			createdBy: decoded.user_id,
		});

		defi
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
// afficher un Defi créée par le coach par son ID
exports.find = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);

	Defi.find({ _id: req.params.id, createdBy: decoded.user_id })
		.populate("createdBy")
		.exec()
		.then((data) => res.json(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Error",
			});
		});
};
// //UPDATE Defi
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
		Defi.findOneAndUpdate(
			{ _id: req.params.id, createdBy: decoded.user_id },
			{
				nom: req.body.nom,
				description: req.body.description,
				lienVideo: req.body.lienVideo,
				objectif: req.body.objectif,
				date: req.body.date,
				joueurs: req.body.joueurs,
				createdBy: decoded.user_id,
			},
			{ useFindAndModify: false }
		)
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Cannot update Defi with id=${id}. Maybe Defi was not found!`,
					});
				} else res.send({ message: "Defi was updated successfully." });
			})
			.catch(() => {
				res.status(500).send({
					message: "Error updating Defi with id=" + id,
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
// //DELETE Defi
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
		Defi.findOneAndRemove({
			_id: mongoose.Types.ObjectId(req.params.id),
			createdBy: mongoose.Types.ObjectId(decoded.user_id),
		})
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Cannot delete Defi with id=${id}. Maybe Defi was not found!`,
					});
				} else {
					res.send({
						message: "Defi was deleted successfully!",
					});
				}
			})
			.catch(() => {
				res.status(500).send({
					message: "Could not delete Defi with id=" + id,
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
