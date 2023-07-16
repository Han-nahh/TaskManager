const express=require("express");
const Task=require("../models/taskmodel")
const {createTask, getTasks,getTask, deleteTask, updateTask, updateSingleTask}=require("../controllers/taskController")
const router=express.Router()

//IN CRUD
// get-to read 
// post-to create 
// patch - to edit a part of the data (partial updates )
// put - replace all values in an object with new ones
// DELETE - remove or destroy resources



// router.route("/").get(getTasks).post(createTask)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask).patch(updateSingleTask)


//cretae tasks
router.post("/",createTask)
//get tasks
router.get('/', getTasks)
router.get('/:id', getTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)
router.patch('/:id', updateSingleTask)





module.exports=router