const router = require("express").Router();
const defi = require("../controller/defi");

router.post("/:token", defi.create);
router.put("/update/:token/:id", defi.update);
router.get("/findAll/:token/", defi.findAll);
router.delete("/delete/:token/:id", defi.delete);
router.get("/find/:token/:id", defi.find);

module.exports = router;

/* const router = require("express").Router();
const defi = require("../models/defi");

//CREATE  Defi
router.post("/", async (req, res) => {
	const newDefi = new defi(req.body);
	try {
		const savedDefi = await newDefi.save();
		res.status(200).json(savedDefi);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE  Defi
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
	try {
		await defi.findByIdAndDelete(req.params.id);
		res.status(200).json("Defi has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET  Defi
router.get("/:id", async (req, res) => {
	try {
		const MyDefi = await defi.findById(req.params.id);
		res.status(200).json(MyDefi);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
*/
