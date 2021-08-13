const mongoose = require('mongoose');
const Landmark = require('./landmarkModel');
const { ObjectId } = mongoose.Schema;

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String },
  name: {
    type:String
  },
  landmark:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Landmark"
  }

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
  //console.log(stats);
await Landmark.findByIdAndUpdate(landmarkId, {
  numReviews: stats[0].nRating,
  avgRating: stats[0].avgRating
  })

};

ratingSchema.post('save', function(){

  this.constructor.calcAverageRating(this.landmark);
  
})



module.exports = mongoose.model('Rating', ratingSchema);