const express = require('express');
const router = express.Router();
const checkauth = require('../middleware/checkadmin')

const admin = require('../controller/adminController');

router.post('/signup', admin.signup);
router.post('/login', admin.login)
router.get('/', admin.get_user)

module.exports = router;