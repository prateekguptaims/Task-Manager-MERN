const { createTask, getTask, updateTaskByid, deleteTaskByid } = require('../Controllers/TaskController');

const router =require('express').Router()


//to get task
// router.get('/',(req,res)=>{
//     res.send('all tasksaa')
// })
//view task
router.get('/',getTask)
//to create task
router.post('/',createTask)
//update
router.put('/:id',updateTaskByid)
router.delete('/:id',deleteTaskByid)




module.exports=router;
