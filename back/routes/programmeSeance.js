const router = require("express").Router();
const programmeSeance = require("../models/programmeSeance");

//CREATE programme séance
router.post("/", async (req, res) => {
	const newProgrammeSeance = new programmeSeance(req.body);
	try {
		const savedProgrammeSeance = await newProgrammeSeance.save();
		res.status(200).json(savedProgrammeSeance);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE programme séance
router.put("/:id", async (req, res) => {
	try {
		const updatedProgrammeSeance = await programmeSeance.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedProgrammeSeance);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE programme séance
router.delete("/:id", async (req, res) => {
	try {
		await programmeSeance.findByIdAndDelete(req.params.id);
		res.status(200).json("Programme seance has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET programme séance
router.get("/:id", async (req, res) => {
	try {
		const MyProgrammeSeance = await programmeSeance.findById(req.params.id);
		res.status(200).json(MyProgrammeSeance);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
