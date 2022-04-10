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
		competence: {
			type: Array,
			required: true,
		},

		objectif: {
			type: String,
			required: true,
		},

		aatteindre: {
			type: String,
			required: true,
		},

		horraire: {
			type: String,
			required: true,
		},

		lieu: {
			type: String,
			required: true,
		},

		reccurente: {
			type: Boolean,
			required: true,
		},
		periode: {
			type: Number,
			required: true,
		},
	},

	{ timestamps: true }
);
module.exports = mongoose.model("seance", seanceSchema);
