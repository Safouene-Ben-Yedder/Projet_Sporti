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
			type: Boolean,
			required: true,
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("competence", CompetenceSchema);
