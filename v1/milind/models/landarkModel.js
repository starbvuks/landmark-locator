const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    name:{ type:String,
    required: true
    },
    rating:{ type:Number,
        requored: true
        },
       review :{ type:String},
       user: {
           type: mongoose.Schema.Types.ObjectId,
           require: true,
           ref: "User"
       }
})

const landmarkSchema =new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    country: {
        type: String,
        required:true,
    
        
    },
    state: {
        type: String,
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
    Coordinates: {
        type: String,
        required: true,

    },
    // latitude: {
    //     type: Number,
    //     required: true,

    // },
    discription: {
        type: String,
        required: true,
    },

    pictures: [],

    highlights: {
        type:String
    },
    howToReach: {
        type:String
    },
    placeForAccomodation: {
        type:String
    },
    goodTimeToVisit:{
        type:String
    },
    reviews: [reviewSchema],
    rating:{
        type: Number,
        required:true,
        default:0
    },
    numReviews: {
        type: Number,
        reuiered: true,
        default:0
    }



});

module.exports = mongoose.model('Landmark', landmarkSchema)