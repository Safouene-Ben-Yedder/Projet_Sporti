const CompetenceModel = require("../models/competence");
const jwt_decode = require("jwt-decode");
module.exports.readcompetence = (req, res) => {
	const token = req.params.token;
	var decoded = jwt_decode(token);
	CompetenceModel.find({ _id: req.params.id, createdBy: decoded.user_id })
		.populate("createdBy")
		.exec()
		.then((data) => res.json(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Error",
			});
		});
};

exports.findAllComp = (req, res) => {
	const token = req.params.token;
	try {
		var decoded = jwt_decode(token);
	} catch (error) {
		res.send({
			message: "Invalid token format",
		});
		return true;
	}

	CompetenceModel.find({ createdBy: decoded.user_id });
	var total = CompetenceModel.count();
	CompetenceModel.find()
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

module.exports.createcompetence = async (req, res) => {
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
		const newcompetence = new CompetenceModel({
			nom: req.body.nom,
			description: req.body.description,
			lien: req.body.lien,
			visible: req.body.visible,
			rating: req.body.rating,
		});
		try {
			const savedcompetence = await newcompetence.save();
			return res.status(200).json(savedcompetence);
		} catch (err) {
			return res.status(400).send(err);
		}
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};

module.exports.updatecompetence = async (req, res) => {
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
		try {
			const updatedcompetence = await CompetenceModel.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true }
			);
			res.status(200).json(updatedcompetence);
		} catch (err) {
			res.status(500).json(err);
			console.log("Update Error : " + err);
		}
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};

module.exports.deletecompetence = async (req, res) => {
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
		try {
			await CompetenceModel.findByIdAndRemove(req.params.id);
			res.status(200).json("Deleted ..");
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
