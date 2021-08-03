const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  landmark:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Landmark"
  }
});

module.exports = mongoose.model('Rating', ratingSchema);