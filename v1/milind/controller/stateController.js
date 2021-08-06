const State = require("../models/state");

module.exports.create_state = (req, res) => {
  const newState = new State(req.body);

  // create state
  newState
    .save()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

// get all the state
module.exports.getAll = (req, res) => {
  State.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      return res.status(400).json({
        message: error.message || "something went wrong",
      });
    });
};

//get the state by id
module.exports.getOne = (req, res) => {
  State.findById({
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
//update the info of state
module.exports.update = (req, res) => {
  State.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    req.body
  )
    .then(() => {
      State.findOne({
        _id: req.params.id,
      }).then((state) => {
        res.status(200).json(state);
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message || "something went wrong",
      });
    });
};

//delete state from database
module.exports.delete_state = (req, res) => {
  State.findByIdAndDelete({
    _id: req.params.id,
  })
    .then(() => {
      res.status(200).json({ message: "state successfuly deleted" });
    })
    .catch((err) => {
      return res.status(400).json(err || "something went wrong");
    });
};
