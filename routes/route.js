const express = require('express');
const {
    addTask,
    allTask
} = require('../controllers/controller');

const router = express.Router();

router.get('/task', allTask)
router.post('/newTask', addTask)
router.get('/task/:id', )
router.put('/task/:id', )
router.delete('/task/:id', )

module.exports = router