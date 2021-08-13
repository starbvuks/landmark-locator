const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    images:[{
        type:String
    }],
    landmark: [{
        type: mongoose.Schema.Types.ObjectId,
      //  required: true,
        ref: "Landmark"
    }]
},
{ timestamps: true }
)

module.exports = mongoose.model('State', stateSchema);