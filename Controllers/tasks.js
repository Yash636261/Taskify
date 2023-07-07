const Task = require('../models/Task')

const getAllTasks= (req, res) => {
    res.send('get all task')
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
}

const getTasks = (req, res) => {
    res.json({ id:req.params.id })
}

const updateTasks = (req, res) => {
    res.send('update taks')
}

const deleteTasks = (req, res) => {
    res.send('delete taks')
}

module.exports={
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}