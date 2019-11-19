const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const headlineschema = new Schema ({
	headline: {
		type: String,
		unique: true
	},
	summary: {
		type: String
	},
	link: {
		type: String
	},
	photo: {
		type: String
	},
	date: {
		type: Date
	},
	saved: {
		type: Boolean,
		default: false
	},
	note: [
		{
			type: Schema.Types.ObjectId,
			ref: "Note"
		}
	]
});

const headline = mongoose.model("headline", headlineschema);

module.exports = headline;