const mongoose = require("mongoose");

const StatSchema = new mongoose.Schema(
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
		lien: {
			type: String,
			required: true,
		},
		visible: {
			type: Boolean,
			required: true,
		},
		timer: {
			type: Number,
			required: true,
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("Stat", StatSchema);
