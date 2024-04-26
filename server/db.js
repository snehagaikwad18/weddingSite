import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectToDatabase = async () => {
const URI = process.env.MONGODB_URI;
mongoose.connect(URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err?.message);
});
}

export {
  connectToDatabase
};
