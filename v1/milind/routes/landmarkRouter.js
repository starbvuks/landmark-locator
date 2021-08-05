const express = require('express');
const router = express.Router();
const checkauth = require('../middleware/checkadmin')

const landmark = require('../controller/landmarkController');

router.post('/add', checkauth, landmark.create);
router.get('/', landmark.getAll)
router.get('/:id', landmark.getOne)
router.put('/update/:id', checkauth, landmark.update);
router.delete('/delete/:id', checkauth, landmark.delete);




module.exports = router;