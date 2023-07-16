const Task=require("../models/taskmodel")


const createTask=async (req,res)=>{
    try{
        const task=await Task.create(req.body)
        res.status(200).json(task)

    }catch(error){
        return res.status(500).json({msg : error.message});

    }
}

const getTasks=async (req,res)=>{
    try {
        const tasks=await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}
//get single task
const getTask=async(req,res)=>{
    try{
        const {id}=req.params
        const task=await Task.findById(id)
        if(!task){
            return res.status(404).json(`No task with such id ${id}`)
        }
        res.status(200).json(task)

    }
    catch(error){
        return res.status(500).json({msg : error.message});

    }
}


//Delete Task
const deleteTask=async(req,res)=>{
    try{
        const {id}=req.params
        const task=await Task.findByIdAndDelete(id)
        if(!task){
            return res.status(404).json(`No task with such id ${id}`)
        }
        res.status(200).send(`Task with id : ${id} deleted`)

    }
    catch(error){
        return res.status(500).json({msg : error.message});

    }
}


//update task

const updateTask=async(req,res)=>{
    try{
        const {id}=req.params
        const task=await Task.findByIdAndUpdate(
            {_id:id},req.body,{new:true, runValidators:true}
            )
        if(!task){
            return res.status(404).json(`No task with such id ${id}`)
        }
        res.status(200).json(task)

    }
    catch(error){
        return res.status(500).json({msg : error.message});

    }
}

//update single field/patch
const updateSingleTask=async(req,res)=>{
    try{
        const {id}=req.params
        const task=await Task.findByIdAndUpdate(
            {_id:id},req.body,{new:true, runValidators:true}
            )
        if(!task){
            return res.status(404).json(`No task with such id ${id}`)
        }
        res.status(200).json(task)

    }
    catch(error){
        return res.status(500).json({msg : error.message});

    }
}


module.exports={
    createTask:createTask,
    getTasks:getTasks,
    getTask:getTask,
    deleteTask:deleteTask,
    updateTask,
    updateSingleTask
}