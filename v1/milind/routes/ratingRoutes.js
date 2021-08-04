const rating = require('../controller/ratingController');
const express = require('express');
const router = express.Router();


router.post('/', rating.add_rating);
router.get('/', rating.get_rating);

module.exports = router;