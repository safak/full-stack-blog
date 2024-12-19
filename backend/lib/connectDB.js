import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // console.log("Mongo URI:", process.env.MONGO);

    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
