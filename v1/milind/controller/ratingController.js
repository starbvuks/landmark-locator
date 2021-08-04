const Rating = require('../models/rateingAndReview');
module.exports.add_rating = (req, res) =>{
    const newRating = new Rating(req.body);

    newRating
        .save()
        .then((rating) => {
            res.status(200).json("Rating saved successfully" + rating)
        })
        .catch((error) => {
            return res.send('something went wrong')
        })
}

module.exports.get_rating = (req, res) => [
    Rating.find()
    .populate("Landmark")
    .exec((err, rating) => {
        res.status(200).json({
            message: "rating saved successfully"
        })
        console.log(err || rating)
    })
]
