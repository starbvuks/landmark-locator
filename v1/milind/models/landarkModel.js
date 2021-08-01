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
    discription: {
        type: String,
        required: true,
    },

    pictures: [],

    highlights: [],
    howToReach: [],
    placeForAccomodation: [],
    goodTimeToVisit:{
        type:String
    }


});

module.exports = mongoose.model('Landmark', landmarkSchema)