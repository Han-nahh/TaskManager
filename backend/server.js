const dotenv=require("dotenv").config();//to make sure access to .env
const express=require("express");
const cors=require("cors")
const connectDB=require("./config/connectDB")
const app=express();
const mongoose = require("mongoose");
const Task=require("./models/taskmodel")
const taskRoutes=require("./routes/taskRoute")
//Middleware
app.use(express.json())//get from json file
app.use(express.urlencoded({extended:false}));//get from form file
app.use(cors({
    origin:["http://localhost:3000" ,"https://task-manager.onrender.com"]//change it with your frontend url
}))
// app.use(cors())//to accept request from any url
app.use("/api/tasks",taskRoutes);
// const logger=(req,res,next)=>{
//     console.log("Middleware");
//     console.log(req.method);
//     next()
// };
//Routes
app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
})

const PORT = process.env.PORT || 5000;



const startServer=async()=>{
    try{
      await connectDB();
      app.listen(PORT,()=>{
          console.log(`Server running on ${PORT}`);
      })
    }
    catch(error){
        console.log(error);
        process.exit(1);
    };

};
startServer();