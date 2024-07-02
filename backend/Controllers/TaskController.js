const TaskModel = require("../Models/TaskModel");

const createTask = async (req, res) => {
    const data = req.body;
    try {
        const model = new TaskModel(data)
        await model.save();
        res.status(200)
            .json({ message: "task created", success: true })
    } catch (error) {
        res.status(500).json({ message: "failed to create task", success: false })
    }
}
const getTask = async (req, res) => {
    try {
        const data =await TaskModel.find({})

        res.status(200)
            .json({ message: "task all get", success: true, data })
    } catch (error) {
        res.status(500).json({ message: "failed to create task", success: false })
    }
}
const updateTaskByid = async (req, res) => {
    try {
        const id=req.params.id;
        const body=req.body;
        const obj={$set:{ ...body }};
        await TaskModel.findByIdAndUpdate(id,obj)

        res.status(200)
            .json({ message: "task updated", success: true })
    } catch (error) {
        res.status(500).json({ message: "failed to update task", success: false })
    }
}
const deleteTaskByid = async (req, res) => {
    try {
        const id=req.params.id;
        const body=req.body;
        const obj={$set:{...body}};
        await TaskModel.findByIdAndDelete(id)

        res.status(200)
            .json({ message: "task deleted", success: true })
    } catch (error) {
        res.status(500).json({ message: "failed to create task", success: false })
    }
}
module.exports = {
    createTask,
    getTask,
    updateTaskByid,
    deleteTaskByid,
}