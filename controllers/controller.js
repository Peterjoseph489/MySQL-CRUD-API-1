const userModel = require('../models/model')

const allTask = async (req, res) => {
    try {
        const task = await userModel.findAll();
        if (!task) {
            res.status(400).json({
                message: 'No task found'
            })
        } else {
            res.status(200).json({
                message: task
            })
        }
    } catch (error) {
        res.status(500).josn({
            message: error.message
        })
    }
};

const addTask = async (req, res) => {
    try {
        const data = {
            content: req.body.content,
            description: req.body.description,
            isComplete: req.body.isComplete ? req.body.isComplete : false
        }
        const newTask = await userModel.create(data);
        if (!newTask) {
            res.status(400).json({
                message: 'No task found'
            })
        } else {
            res.status(200).json({
                message: newTask
            })
        }
    } catch (error) {
        res.status(500).josn({
            message: error.message
        })
    }
};




module.exports = {
    addTask,
    allTask
}
