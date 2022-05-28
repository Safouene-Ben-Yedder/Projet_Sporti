const router = require("express").Router();
const discipline = require("../models/discipline");
//CREATE  Disc
router.post("/", async (req, res) => {
	const newDiscipline = new discipline(req.body);
	try {
		const savedDiscipline = await newDiscipline.save();
		res.status(200).json(savedDiscipline);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE  Disc
router.put("/:id", async (req, res) => {
	try {
		const updatedDiscipline = await discipline.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedDiscipline);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE  Disc
router.delete("/:id", async (req, res) => {
	try {
		await discipline.findByIdAndDelete(req.params.id);
		res.status(200).json("Discipline has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET  Disc
router.get("/:id", async (req, res) => {
	try {
		const MyDiscipline = await discipline.findById(req.params.id);
		res.status(200).json(MyDiscipline);
	} catch (err) {
		res.status(500).json(err);
	}
});

//fetch
router.get("/", async (req, res) => {
	try {
		const MyDiscipline = await discipline.find();
		res.status(200).json(MyDiscipline);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
