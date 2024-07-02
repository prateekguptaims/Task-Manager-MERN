import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react'
import { FaCheck, FaPencilAlt, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { CreateTask, DeleteTask, GetAllTask, UpdateTask } from './api';
import { notify } from './utils';

function TaskManager() {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([])
    const [copyTasks, setCopyTasks] = useState([])
    const [updateTask, setUpdateTask] = useState(null)
    const handleTask=()=>{
        if(updateTask && input){
            //update api call
            const obj={
                taskName:input,
                isDone:updateTask.isDone,
                _id:updateTask._id,
            }
            handleUpdate(obj)

        }
        else if(updateTask===null && input){
            //create api call
            handleAddTask();
        }
    }
    useEffect(() => {
     if(updateTask){
        setInput(updateTask.taskName)
     }
    }, [updateTask])
    

    const handleAddTask = async () => {
        const obj = {
            taskName: input,
            isDone: false,
        }
        console.log(obj)
        try {
            const { success, message } = await CreateTask(obj)
            if (success) {
                //show success toast msg
                notify(message, 'success')
            }
            else {
                notify(message, 'error')

            }
            
            setInput('')
            fetchAlltask()

        } catch (error) {
            console.log(error)
            notify('failed to create task', 'error')
        }
    }
    const fetchAlltask = async () => {
        try {
            const { data } = await GetAllTask()

            // console.log(data)
            setTasks(data)
            setCopyTasks(data)

        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        fetchAlltask() //to fetch all records on page
    }, [])

    const handleDeleteTask = async (id) => {
        try {
            const { success, message } = await DeleteTask(id)
            if (success) {
                //show success toast msg
                notify(message, 'success')
            }
            else {
                notify(message, 'error')

            }
            fetchAlltask()
        } catch (error) {
            console.log(error)
            notify(message, 'error')

        }
    }
    const handleCheckAndUncheck = async (item) => {
        const { _id, isDone, taskName } = item;
        console.log(isDone)
        const newIsDone = (isDone === "true") ? "false" : "true";

    const obj = {
        taskName,
        isDone: newIsDone 
    }
        console.log(obj)
        try {
            const { success, message } = await UpdateTask(_id, obj)
            if (success) {
                //show success toast msg
                notify(message, 'success')
            }
            else {
                notify(message, 'error')

            }

            fetchAlltask()

        } catch (error) {
            console.log(error)
            notify('failed to create task', 'error')
        }
    }
    const handleUpdate = async (item) => {
        const { _id, isDone, taskName } = item;
       
        const obj = {
            taskName,
            isDone,
        }
        console.log(obj)
        try {
            const { success, message } = await UpdateTask(_id, obj)
            if (success) {
                //show success toast msg
                notify(message, 'success')
            }
            else {
                notify(message, 'error')

            }
            setInput('')
            fetchAlltask()

        } catch (error) {
            console.log(error)
            notify('failed to create task', 'error')
        }
    }
const handleSearch=(e)=>{
    const term=e.target.value.toLowerCase();
    // console.log(term)
    const oldtask=[...copyTasks]
    const results=oldtask.filter((item)=>item.taskName.toLowerCase().includes(term))
    setTasks(results)

}
    return (
        <div className='d-flex flex-column align-items-center w-100 m-auto mt-5'>
            <h1 className='mb-4'>Task Manager App</h1>
            <div className='d-flex justify-content-between align-items-center mb-4 w-100'>
                <div className='input input-group flex-grow-1 me-2'>
                    <input type="text" className='form-control me-1' placeholder='Add a new task'
                        value={input} onChange={(e) => setInput(e.target.value)} />
                    <button className='btn btn-success me-2 btn-sm' onClick={handleTask}><FaPlus /> </button>
                </div>
                <div className='input-group flex-grow-1'>
                    <span className='input-group-text '><FaSearch /></span>
                    <input type="text" className='form-control ' placeholder='search Task' onChange={handleSearch} />
                </div>
            </div>
            {/* list of items */}
            <div className='d-flex flex-column w-100'>
                {
                    tasks.map((item) => {
                        return (                           
                                <div key={item._id} className="m-2 p-2 border bg-light w-100 rounded-3 d-flex 
                justify-content-between
                 align-items-center">

                                    <span className={item.isDone=="true" ? 'text-decoration-line-through ' : ''}>
                                        {item.taskName}
                                    </span>


                                    <div className=''>
                                        <button className='btn btn-success btn-sm m-1' type='button' onClick={() => handleCheckAndUncheck(item)}><FaCheck /></button>
                                        <button className='btn btn-primary btn-sm m-1' type='button' onClick={()=>setUpdateTask(item)} ><FaPencilAlt /></button>
                                        <button className='btn btn-danger btn-sm m-1' type='button' onClick={() => handleDeleteTask(item._id)}><FaTrash /></button>
                                    </div>
                                </div>
                            
                        )
                    })
                }
            </div>
            {/* toastify */}
            <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} />

        </div>
    )
}

export default TaskManager
