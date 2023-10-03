const userModel = require('../models/model')
const { Sequelize, Op } = require('sequelize');

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






const searchTasks = async (req, res) => {
    try {
        const searchData = req.params.searchData; // Assuming the search data is passed as a parameter
        const tasks = await userModel.findAll({
            where: {
                // Define the search condition here based on your model fields
                // You can customize this condition according to your requirements
                [Sequelize.Op.or]: [
                    {
                        content: {
                            [Sequelize.Op.like]: `%${searchData}%`
                        }
                    },
                    {
                        description: {
                            [Sequelize.Op.like]: `%${searchData}%`
                        }
                    }
                    // Add more fields as needed for searching
                ]
            }
        });

        if (tasks.length === 0) {
            res.status(404).json({
                message: 'No matching tasks found'
            });
        } else {
            res.status(200).json({
                message: tasks
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};













module.exports = {
    addTask,
    allTask,
    getOneTask,
    UpdateOneTask,
    deleteTask,
    searchTasks
}
