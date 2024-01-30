// 19. Connect With Mongoose
import mongoose from "mongoose";

const connectDB = async function () {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in mongoDB connection: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
