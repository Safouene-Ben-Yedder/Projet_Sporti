const statModel = require("../models/stat");
const jwt_decode = require("jwt-decode");

module.exports.readstat = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);

	statModel.find
		.find({ _id: req.params.id, createdBy: decoded.user_id })
		.populate("createdBy")
		.exec()
		.then((data) => res.json(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Error",
			});
		});
};

exports.findAllStats = (req, res) => {
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}

	statModel.find({ createdBy: decoded.user_id });
	var total = statModel.count();
	statModel
		.find()
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

module.exports.createstat = async (req, res) => {
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
		const newstat = new statModel({
			Titre: req.body.Titre,
			description: req.body.description,
			timer: req.body.timer,
			lien: req.body.lien,
			Visible: req.body.Visible,
			maxmin: req.body.maxmin,
			createdBy: decoded.user_id,
		});
		newstat
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

module.exports.updatestat = async (req, res) => {
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}
	try {
		if (decoded.role === "Coach") {
			const updatedstat = await statModel.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true }
			);
			res.status(200).json(updatedstat);
		} else {
			res.status(401).send({
				message: "Unauthorized",
			});
		}
	} catch (err) {
		res.status(500).json(err);
		console.log("Update Error : " + err);
	}
};

module.exports.deletestat = async (req, res) => {
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}
	try {
		if (decoded.role === "Coach") {
			await statModel.findByIdAndRemove(req.params.id);
			res.status(200).json("Deleted ..");
		} else {
			res.status(401).send({
				message: "Unauthorized",
			});
		}
	} catch (err) {
		res.status(500).json(err);
	}
};
