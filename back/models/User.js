const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		nom: {
			type: String,
			required: true,
		},
		prenom: {
			type: String,
			required: true,
		},
		dateNaissance: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		tel: {
			type: Number,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		poids: {
			type: String,
		},
		taille: {
			type: String,
		},
		droit: {
			type: String,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
