const State = require('../models/state');
const Landmark = require('../models/landmarkModel');

module.exports.add_landmark = async (req, res) =>{
    //find the state
    const state = await State.findOne({_id: req.params.stateId});
    //add landmark to state

    const newLandmark=  Landmark(req.body)

     await newLandmark
        .save()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            return res.json({
                message: error || 'something went wrong'
            })
        })
    //associate the rating with landmark
    state.landmark.push(newLandmark._id);
    await state.save();
    console.log(newLandmark._id)
}

module.exports.get_landmark =async (req, res) => {
    const state = await State.findOne({_id: req.params.stateId}).populate("landmark");
    
        res.status(200).json({ state
           
    })
}
