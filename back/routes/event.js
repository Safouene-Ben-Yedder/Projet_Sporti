const router = require("express").Router();
const event = require("../models/event");

//CREATE  Event
router.post("/", async (req, res) => {
	const newEvent = new event(req.body);
	try {
		const savedEvent = await newEvent.save();
		res.status(200).json(savedEvent);
	} catch (err) {
		res.status(500).json(err);
	}
});
//UPDATE  Event
router.put("/:id", async (req, res) => {
	try {
		const updatedEvent = await event.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedEvent);
	} catch (err) {
		res.status(500).json(err);
	}
});
//DELETE  Event
router.delete("/:id", async (req, res) => {
	try {
		await event.findByIdAndDelete(req.params.id);
		res.status(200).json("Event has been deleted...");
	} catch (err) {
		res.status(500).json(err);
	}
});
//GET  Event
router.get("/:id", async (req, res) => {
	try {
		const MyEvent = await event.find(req.params.id);
		res.status(200).json(MyEvent);
	} catch (err) {
		res.status(500).json(err);
	}
});
module.exports = router;
