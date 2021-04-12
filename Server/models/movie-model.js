const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema({
  movieName: String,
  rating: Number,
  genre: String,
  date: {
    type: Date,
    default: Date.now,
  },
})
module.exports = mongoose.model("movies", Movie);
