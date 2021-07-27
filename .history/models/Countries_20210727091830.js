const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const countrySchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    image: String,
    quizzes: [{ type: Schema.Types.ObjectId, ref: "Quizz" }]
}, {collection: "countrys"});

const quizzSchema = Schema({
    _id: Schema.Types.ObjectId,
    questions: Schema.Types.Array,
    country_name: String
});

module.exports = Country = mongoose.model("Country", countrySchema);
module.exports = Quizz = mongoose.model("Quizz", quizzSchema);
