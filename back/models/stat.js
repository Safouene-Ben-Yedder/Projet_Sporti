const mongoose = require("mongoose");

const StatSchema = new mongoose.Schema(
	{
		Titre: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		timer: {
			type: Number,
			required: true,
		},
		lien: {
			type: String,
			required: true,
		},
		Visible: {
			type: String,
			required: true,
		},

		maxmin: {
			type: String,
			required: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("Stat", StatSchema);
