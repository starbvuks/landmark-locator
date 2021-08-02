const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min:1,
        max:5
    },
    review: {
        type: String
    }
})

module.exports = mongoose.model('rating', ratingSchema);