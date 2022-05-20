const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InvitationSchema = new Schema(
	{
		nom: {
			type: String,
			required: true,
		},
		prenom: {
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
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Invitation", InvitationSchema);
