const express = require('express');
const router = express.Router();
const checkauth = require('../middleware/checkadmin')

const state = require('../controller/stateLandmark');

router.post('/:stateId', checkauth, state.create_landmark);
router.get('/:stateId',  state.get_landmark);

module.exports = router;