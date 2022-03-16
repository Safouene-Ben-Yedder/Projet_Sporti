const mongoose = require("mongoose");

const programmeSeanceSchema = new mongoose.Schema(
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
		image: {
			type: String,
			required: true,
		},
		lienVideo: {
			type: String,
			required: true,
		},
		technique: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("programmeSeance", programmeSeanceSchema);
