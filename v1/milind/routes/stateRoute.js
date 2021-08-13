const express = require('express');
const router = express.Router();
const checkauth = require('../middleware/checkadmin')

const state = require('../controller/stateController');

router.post('/add', checkauth, state.create_state);
router.get('/', state.getAll)
router.get('/:id', state.getOne)
router.put('/update/:id',checkauth, state.update);
router.delete('/delete/:id',checkauth,  state.delete_state);


module.exports = router;