const mongoose = require("mongoose");

const defiSchema = new mongoose.Schema(
	{
		nom: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		lienVideo: {
			type: String,
			required: true,
		},
		objectif: {
			type: String,
			required: true,
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("defi", defiSchema);
