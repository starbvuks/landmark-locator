const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    landmark: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Landmark"
    }]

},
{ timestamps: true }
)

module.exports = mongoose.model('State', stateSchema);