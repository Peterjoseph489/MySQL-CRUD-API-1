const express = require('express');
const {
    addTask,
    allTask,
    getOneTask,
    UpdateOneTask,
    deleteTask,
    searchTasks
} = require('../controllers/controller');

const router = express.Router();

router.get('/task', allTask)
router.post('/newTask', addTask)
router.get('/task/:id', getOneTask)
router.put('/task/:id', UpdateOneTask)
router.delete('/task/:id', deleteTask)
router.get('/search/:searchData', searchTasks)

module.exports = router