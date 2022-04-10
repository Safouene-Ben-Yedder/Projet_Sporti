const mongoose = require("mongoose");

const seanceSchema = new mongoose.Schema(
	{
		titre: {
			type: String,
			required: true,
			unique: true,
		},
		joueur: {
			type: Array,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		horaire: {
			type: String,
			required: true,
		},
		competence: {
			type: String,
			required: true,
		},
		objectif: {
			type: String,
			required: true,
		},
		lieu: {
			type: String,
			required: true,
		},
		statistique: {
			type: String,
			required: true,
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("seance", seanceSchema);
