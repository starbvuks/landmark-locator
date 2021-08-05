const rating = require('../controller/ratingController');
const express = require('express');
const checkAuth = require('../middleware/checkAuth')
const router = express.Router();


router.post('/',checkAuth, rating.add_rating);
router.get('/', rating.get_rating);
router.delete('/delete/:id',checkAuth, rating.delete_rating);

module.exports = router;