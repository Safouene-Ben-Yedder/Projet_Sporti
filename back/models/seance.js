const mongoose = require("mongoose");

const seanceSchema = new mongoose.Schema(
	{
		titre: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		competence: {
			type: Array,
			required: true,
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("seance", seanceSchema);
