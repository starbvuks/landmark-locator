const express = require("express");
const router = express.Router();
const checkauth = require("../middleware/checkAuth");
// const avtar = require('../controller/userProfilePic');
const user = require("../controller/userAuth");

router.post("/signup", user.signup);
router.post("/login", user.login);
router.get("/", user.get_user);
router.get('/user/favourite', user.get_favourite)

router.get("/", checkauth, (req, res) => {
  res.send("you are authorized to post review");
});

module.exports = router;
