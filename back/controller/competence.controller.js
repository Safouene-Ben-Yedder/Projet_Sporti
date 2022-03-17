const CompetenceModel = require("../models/competence");

module.exports.readcompetence = (req, res) => {
	CompetenceModel.find((err, docs) => {
		if (!err) res.send(docs);
		else console.log("Error to get data : " + err);
	});
};

module.exports.createcompetence = async (req, res) => {
	const newcompetence = new CompetenceModel({
		nom: req.body.nom,
		description: req.body.description,
		lien: req.body.lien,
		visible: req.body.visible,
	});
	try {
		const savedcompetence = await newcompetence.save();
		return res.status(200).json(savedcompetence);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.updatecompetence = async (req, res) => {
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
};

module.exports.deletecompetence = async (req, res) => {
	try {
		await CompetenceModel.findByIdAndRemove(req.params.id);
		res.status(200).json("Deleted ..");
	} catch (err) {
		res.status(500).json(err);
	}
};
