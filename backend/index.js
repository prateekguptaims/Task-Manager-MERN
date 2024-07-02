const express =require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT || 8080;
const cors = require('cors');

require('./Models/db')

const TaskRouter=require('./Routes/TaskRoute');
const bodyParser = require('body-parser');

app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use(bodyParser.json())
app.use('/tasks',TaskRouter)
// app.use('/gettasks',TaskRouter)

app.listen(PORT,()=>{
    console.log(`server is running on port=${PORT}`)
})
