const statModel = require("../models/stat");

module.exports.readstat = (req, res) => {
	statModel.find((err, docs) => {
		if (!err) res.send(docs);
		else console.log("Error to get data : " + err);
	});
};

module.exports.createstat = async (req, res) => {
	const newstat = new statModel({
		Titre: req.body.Titre,
		description: req.body.description,
		timer: req.body.timer,
		lien: req.body.lien,
		Visible: req.body.Visible,
		maxmin: req.body.maxmin,
	});
	try {
		const savedstat = await newstat.save();
		return res.status(200).json(savedstat);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.updatestat = async (req, res) => {
	try {
		const updatedstat = await statModel.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedstat);
	} catch (err) {
		res.status(500).json(err);
		console.log("Update Error : " + err);
	}
};

module.exports.deletestat = async (req, res) => {
	try {
		await statModel.findByIdAndRemove(req.params.id);
		res.status(200).json("Deleted ..");
	} catch (err) {
		res.status(500).json(err);
	}
};
