const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
 cordinates:{type:String, required: true},
 
  landmark: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Landmark",
  },
});

module.exports= mongoose.model('Accomodation', hotelSchema);