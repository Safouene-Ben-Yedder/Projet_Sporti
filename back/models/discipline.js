const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const disciplineSchema = new Schema(
	{
		type: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("discipline", disciplineSchema);
