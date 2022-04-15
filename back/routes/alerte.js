const router = require("express").Router();
const alerte = require("../models/alerte");
//CREATE  alerte
router.post("/", async (req, res) => {
	const newAlerte = new alerte(req.body);
	try {
		const savedAlerte = await newAlerte.save();
		res.status(200).json(savedAlerte);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE  alerte
router.put("/:id", async (req, res) => {
	try {
		const updatedAlerte = await alerte.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedAlerte);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE  alerte
router.delete("/:id", async (req, res) => {
	try {
		await alerte.findByIdAndDelete(req.params.id);
		res.status(200).json("Alerte has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET  alerte
router.get("/:id", async (req, res) => {
	try {
		const MyAlerte = await alerte.findById(req.params.id);
		res.status(200).json(MyAlerte);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
