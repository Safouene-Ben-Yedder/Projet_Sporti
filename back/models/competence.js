const mongoose = require("mongoose");

const CompetenceSchema = new mongoose.Schema(
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
		lien: {
			type: String,
			required: true,
		},
		visible: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("competence", CompetenceSchema);
