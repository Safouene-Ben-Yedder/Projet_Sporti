const Event = require("../models/event");
const jwt_decode = require("jwt-decode");
const mongoose = require("mongoose");
//fetch event
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

	Event.find({ createdBy: decoded.user_id });
	var total = Event.count();
	Event.find()
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
//CREATE Event
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
		const event = new Event({
			nom: req.body.nom,
			description: req.body.description,
			date: req.body.date,
			publique: req.body.publique,
			createdBy: decoded.user_id,
		});

		event
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
// afficher un Event créée par le coach par son ID
exports.find = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);

	Event.find({ _id: req.params.id, createdBy: decoded.user_id })
		.populate("createdBy")
		.exec()
		.then((data) => res.json(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Error",
			});
		});
};
// //UPDATE Event
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
		Event.findOneAndUpdate(
			{ _id: req.params.id, createdBy: decoded.user_id },
			{
				nom: req.body.nom,
				description: req.body.description,
				date: req.body.date,
				publique: req.body.publique,
				createdBy: decoded.user_id,
			},
			{ useFindAndModify: false }
		)
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Cannot update Event with id=${id}. Maybe Event was not found!`,
					});
				} else res.send({ message: "Event was updated successfully." });
			})
			.catch(() => {
				res.status(500).send({
					message: "Error updating Event with id=" + id,
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
// //DELETE Event
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
		Event.findOneAndRemove({
			_id: mongoose.Types.ObjectId(req.params.id),
			createdBy: mongoose.Types.ObjectId(decoded.user_id),
		})
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: `Cannot delete Event with id=${id}. Maybe Event was not found!`,
					});
				} else {
					res.send({
						message: "Event was deleted successfully!",
					});
				}
			})
			.catch(() => {
				res.status(500).send({
					message: "Could not delete Event with id=" + id,
				});
			});
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
