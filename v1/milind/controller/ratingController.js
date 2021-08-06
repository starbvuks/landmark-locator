const Rating = require('../models/rateingAndReview');
const Landmark = require('../models/landmarkModel');
module.exports.add_rating = async (req, res) =>{
    //find the landmark
    const landmark = await Landmark.findOne({_id: req.params.landmarkId});
    //create a comment
    const newRating = new Rating(req.body);

     await newRating
        .save()
        .then((rating) => {
            res.status(200).json(rating)
        })
        .catch((error) => {
            return res.json({
                message: error || 'something went wrong'
            })
        })
    //associate the rating with landmark
    landmark.reviews.push(newRating._id);
    await landmark.save();
}

module.exports.get_rating =async (req, res) => {
    const landmark = await Landmark.findOne({_id: req.params.landmarkId}).populate("reviews");
    
        res.status(200).json({ landmark
           
    }).catch((err) => {
        res.status(400).json(err)
    });
}

module.exports.delete_rating = (req, res) => {
    Rating.findByIdAndDelete({
        _id: req.params.id
    })
        .then(() => {
            res.status(200).json({message:"rating and comment successfuly deleted"})
        })
        .catch((err)=> {
            return res.status(400).json(err|| "something went wrong")
        })
}
   

