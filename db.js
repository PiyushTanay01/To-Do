const mongoose=require("mongoose");
mongoose.connect("");

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:boolean
});

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}