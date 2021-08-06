const State = require('../models/state');
const Landmark = require('../models/landmarkModel');

module.exports.create_landmark = async (req, res) => {
  const state = State.findOne({_id: req.params.stateId});

    const newLandmark = new Landmark(req.body);

    // create state
   await newLandmark
        .save()
        .then((data) => {
            res.status(200).json({data})
        })
        .catch((err) => {
            return res.status(400).json(err)
        });
 // association with landmark model
        state.landmark.push(newState.id)
        await state.save();
    
 }

module.exports.get_landmark = (req, res) => {
    const state = Landmark.findOne({_id: req.params.stateId}).populate("landmark")
    res.status(200).json({state}).catch((err) => {
        return res.status(400).json(err)
    })

 }
