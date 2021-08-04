const express = require('express');
const router = express.Router();
const checkauth = require('../middleware/checkAuth')
// const avtar = require('../controller/userProfilePic');
const user = require('../controller/userAuth');

router.post('/signup', user.signup);
router.post('/login', user.login);
router.get('/', user.get_user);
// router.post('/avtar', avtar.single("avtar"), (req, res) => {
//     if(!req.files){
//         return res.status(400).json("please select the file")
//     }
//     // const profilePic = req.files.avtar;
//     res.status(200).json({msg :"profile picture added successfuly"})
//})
router.get('/', checkauth, (req, res) => {
    res.send("you are authorized to post review")
})

module.exports = router;