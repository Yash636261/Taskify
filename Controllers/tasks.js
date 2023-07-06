const getAllTasks= (req, res) => {
    res.send('get all task')
}

const createTasks = (req, res) => {
    res.json(req.body)
}

const getTasks = (req, res) => {
    res.json({id:req.params.id})
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