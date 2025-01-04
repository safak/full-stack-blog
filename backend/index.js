import express from "express"
import connectDB from "./lib/connectDB.js" 
import userRouter from "./routes/user.route.js" //importing user routes
import webHookRouter from "./routes/webhook.route.js"
//initialize server
const app = express()
app.use("/webhooks",webHookRouter);
app.use(express.json());

//user endpoint for all user-related actions
app.use("/user",userRouter);

//express error handling
app.use((error, req,res,next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message || "Something went wrong!",
        status: error.status,
        stack: error.stack,
    });
});

// Start the server and listen on the specified port
app.listen(process.env.PORT,()=>{
    console.log(process.env.CLERK_WEBHOOK_SECRET)
    connectDB()
    console.log("Server is running!")
})