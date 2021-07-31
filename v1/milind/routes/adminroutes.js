const express = require('express');
const router = express.Router();
const checkauth = require('../middleware/checkadmin')

const admin = require('../controller/adminController');

router.post('/signup', admin.signup);
router.post('/login', admin.login)
router.get('/', checkauth, (req, res) => {
    res.send("you are on admin page")
})

module.exports = router;