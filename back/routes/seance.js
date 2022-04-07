const router = require("express").Router();
const seance = require("../models/seance");

//CREATE  séance
router.post("/", async (req, res) => {
	const newSeance = new seance(req.body);
	try {
		const savedSeance = await newSeance.save();
		res.status(200).json(savedSeance);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE  séance
router.put("/:id", async (req, res) => {
	try {
		const updatedSeance = await seance.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedSeance);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE  séance
router.delete("/:id", async (req, res) => {
	try {
		await seance.findByIdAndDelete(req.params.id);
		res.status(200).json("séance has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET  séance
router.get("/:id", async (req, res) => {
	try {
		const MySeance = await seance.find(req.params.id);
		res.status(200).json(MySeance);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
