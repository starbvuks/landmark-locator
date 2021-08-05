const Landmark = require("../models/landmarkModel");

module.exports.create = (req, res) => {
  const newLandmark = new Landmark(req.body);

  newLandmark
    .save()
    .then((data) => {
      res.status(200).json({
        data,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message || "something went wrong while addning landmark",
      });
    });
};

module.exports.getAll = (req, res) => {
  Landmark.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      return res.status(400).json({
        message: error.message || "something went wrong",
      });
    });
};

module.exports.getOne = (req, res) => {
  Landmark.findById({
    _id: req.params.id,
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({
        message:
          err.message ||
          "something went wrong while retriving an landmark information",
      });
    });
};

module.exports.update = (req, res) => {
  Landmark.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    req.body
  )
    .then((landmark) => {
      Landmark.findOne({
        _id: req.params.id,
      }).then((landmark) => {
        res.status(200).json(landmark);
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message || "something went wrong",
      });
    });
};

module.exports.delete = (req, res) => {
  Landmark.findByIdAndDelete({
    _id: req.params.id,
  })
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message || "something went wrong",
      });
    });
};

