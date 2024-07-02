const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const TaskSchema=new Schema({
    taskName:{
        type: String,
        required:true
    },
    isDone:{
        type: String,
        required:true
    },

})
const TaskModel=mongoose.model('todos',TaskSchema);
module.exports=TaskModel;

