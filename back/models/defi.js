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
		date: {
			type: Date,
		},
		joueurs: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},

	{ timestamps: true }
);
module.exports = mongoose.model("defi", defiSchema);
