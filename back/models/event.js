const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
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
		date: {
			type: Date,
			required: true,
		},
		publique: {
			type: Boolean,
			required: true,
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("event", eventSchema);
