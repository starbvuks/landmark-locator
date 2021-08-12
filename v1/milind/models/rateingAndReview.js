const mongoose = require('mongoose');
const Landmark = require('./landmarkModel');

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String },
});

ratingSchema.statics.calcAverageRating =async function(landmarkId){
  const stats = await this.aggregate([
    {
      $match: {landmark: landmarkId}
    },
    {
      $group: {
        _id: '$landmark',
        nRating: {$sum : 1},
        avgRating: {$avg: '$rating'}
      }
    }
  ])
  console.log(stats);
 const rate = await Landmark.findByIdAndUpdate(landmarkId, {
  numReviews: stats[0].nRating,
  avgRating: stats[0].avgRating
  })
  console.log(rate)
};

ratingSchema.post('save', function(){

  this.constructor.calcAverageRating(this.landmark);
  
})



module.exports = mongoose.model('Rating', ratingSchema);