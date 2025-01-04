import mongoose from "mongoose";

//An async function allows the program to handle long-running tasks without blocking the rest of the code. I
const connectDB = async ()=>{
    try{
        mongoose.connect(process.env.MONGO)
        console.log("Database connected!")
    }catch(err){
        console.log(err)
    }
}

export default connectDB