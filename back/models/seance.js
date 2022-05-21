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
		objectif: {
			type: String,
			required: true,
		},
		competences: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "competence",
			},
		],
		stats: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "stat",
			},
		],
		lieuentrainements: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "lieuEntrainement",
		},
		programmeSeances: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "programmeSeance",
		},
		joueur: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("seance", seanceSchema);
