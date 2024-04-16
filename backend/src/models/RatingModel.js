const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  userId: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
