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
        res.status(500).json({
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
        const newT = userModel.build(data);
        newTask = await newT.save();
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
        res.status(500).json({
            message: error.message
        })
    }
};


const getOneTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await userModel.findOne({ where: {id: id} });
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
        res.status(500).json({
            message: error.message
        })
    }
};


const UpdateOneTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await userModel.update(req.body, { where: {id: id} });
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
        res.status(500).json({
            message: error.message
        })
    }
};


const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await userModel.destroy({ where: {id: id} });
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
        res.status(500).json({
            message: error.message
        })
    }
};



module.exports = {
    addTask,
    allTask,
    getOneTask,
    UpdateOneTask,
    deleteTask
}
