const mongoose = require("mongoose");

const landmarkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"State",
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },

    images: [{
      imgUrl:{
        type:String,
        required: true
      },
      imgName:{
        type:String,
        required:true
      }
    }],

    highlights: [{ type: String }],
    howToReach: {
      type: String,
    },
    placeForAccomodation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Accomodation",
    },
    goodTimeToVisit: {
      type: String,
    },
    reviews:[ {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    }],
    avgRating:{
        type: Number,
        required:true,
        default:4.5,
        min: 1,
        max: 5

    },
    numReviews: {
        type: Number,
        reuiered: true,
        default:0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Landmark", landmarkSchema);
