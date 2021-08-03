const mongoose = require("mongoose");

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
    category:{
        type:String,
        required:true
    },
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
        type:mongoose.Schema.Types.ObjectId,
        ref:"Accomodation"
    },
    goodTimeToVisit:{
        type:String
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Rating"
    },
    // rating:{
    //     type: Number,
    //     required:true,
    //     default:0
    // },
    // numReviews: {
    //     type: Number,
    //     reuiered: true,
    //     default:0
    // }



});

module.exports = mongoose.model('Landmark', landmarkSchema)