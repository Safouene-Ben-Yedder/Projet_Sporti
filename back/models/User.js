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
		telephone: {
			type: Number,
			required: false,
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
		role: {
			type: String,
			enum: ["Coach", "Joueur"],
			default: "Coach",
		},
		IMC: {
			type: Number,
		},
		discipline: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "discipline",
		},
		event: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "event",
		},
		alerte: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "alerte",
			},
		],
		competences: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "competence",
			},
		],
		abonnement: {
			type: String,
			enum: ["Free", "Basic", "Premium"],
			default: "Free",
		},
		inviteNumber: {
			type: Number,
		},
		coach: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		firstLogin: {
			type: Boolean,
			default:true,
		},

	},
	{ timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
