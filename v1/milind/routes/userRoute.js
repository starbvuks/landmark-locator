const express = require("express");
const router = express.Router();
const checkauth = require("../middleware/checkAuth");

const user = require("../controller/userAuth");

router.post("/signup", user.signup);

router.post("/login", user.login);
router.get("/login", user.login);

router.get("/", checkauth, (req, res) => {
  res.send("you are authorized to post review");
});

module.exports = router;
