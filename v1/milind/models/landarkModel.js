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
    longitude: {
        type: String,
        required: true,

    },
    latitude: {
        type: String,
        required: true,

    },
    discription: {
        type: String,
        required: true,
    },

    pictures: [],

    highlights: [],
    howToReach: [],
    placeForAccomodation: []


});

module.exports = mongoose.model('Landmark', landmarkSchema)