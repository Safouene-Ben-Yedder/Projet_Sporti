const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const alerteSchema = new Schema(
	{
		type: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("alerte", alerteSchema);
