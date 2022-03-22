const router = require("express").Router();
const lieuEntrainement = require("../models/lieuEntrainement");

//CREATE lieu Entrainement
router.post("/", async (req, res) => {
	const newLieuEntrainement = new lieuEntrainement(req.body);
	try {
		const savedLieuEntrainement = await newLieuEntrainement.save();
		res.status(200).json(savedLieuEntrainement);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE lieu Entrainement
router.put("/:id", async (req, res) => {
	try {
		const updatedLieuEntrainement = await lieuEntrainement.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedLieuEntrainement);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE lieu Entrainement
router.delete("/:id", async (req, res) => {
	try {
		await lieuEntrainement.findByIdAndDelete(req.params.id);
		res.status(200).json("lieu Entrainement has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET lieu Entrainement
router.get("/:id", async (req, res) => {
	try {
		const MyLieuEntrainement = await lieuEntrainement.find(req.params.id);
		res.status(200).json(MyLieuEntrainement);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
