const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        // const connect=await mongoose.connect('mongodb+srv://hanna123:hanna123@taskmanager.qt27pzf.mongodb.net/TaskManagement');
        const connect=await mongoose.connect('mongodb+srv://username:password@taskmanagement.7z8rpnd.mongodb.net/tasks?retryWrites=true&w=majority')
        console.log(`Mongo DB connected` );
    }
    catch(error){
        console.log(error);
        process.exit(1)
    }
};
module.exports=connectDB