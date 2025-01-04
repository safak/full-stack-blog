import { Schema } from "mongoose";
import mongoose from "mongoose";

// Define the schema for a user collection in the database
const userSchema = new Schema({
    clerkUserId: {
        type: String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    img:{
        type:String,
    },
}, 
{
    // Enable automatic creation of "createdAt" and "updatedAt" timestamps
    timestamps:true
}
);


// Export the schema as a Mongoose model named "User"
export default mongoose.model("User", userSchema);