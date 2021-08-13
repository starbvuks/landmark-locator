const rating = require('../controller/ratingController');
const express = require('express');
const checkAuth = require('../middleware/checkAuth')
const router = express.Router();


router.post('/:landmarkId',checkAuth, rating.add_rating);
router.get('/:landmarkId', rating.get_rating);
router.delete('/delete/:id',checkAuth, rating.delete_rating);
// router.get('/auth', checkAuth, (req, res) => {
//     res.send('you are authorized to post review')
// })

module.exports = router;