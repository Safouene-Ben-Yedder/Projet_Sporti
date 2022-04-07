const router = require("express").Router();
const defi = require("../models/defi");

//CREATE  Defi
router.post("/defi", async (req, res) => {
	const newDefi = new defi(req.body);
	try {
		const savedDefi = await newDefi.save();
		res.status(200).json(savedDefi);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE  Defi
router.put("/defi/:id", async (req, res) => {
	try {
		const updatedDefi = await defi.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedDefi);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE  Defi
router.delete("/defi/:id", async (req, res) => {
	try {
		await defi.findByIdAndDelete(req.params.id);
		res.status(200).json("Defi has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET  Defi
router.get("/defi/:id", async (req, res) => {
	try {
		const MyDefi = await defi.find(req.params.id);
		res.status(200).json(MyDefi);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
