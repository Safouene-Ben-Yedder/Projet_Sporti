const mongoose = require("mongoose");

const lieuEntrainementSchema = new mongoose.Schema(
	{
		nom: {
			type: String,
			required: true,
		},
		ville: {
			type: String,
			required: true,
		},
		pays: {
			type: String,
			required: true,
		},
		adresse: {
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
module.exports = mongoose.model("lieuEntrainement", lieuEntrainementSchema);
