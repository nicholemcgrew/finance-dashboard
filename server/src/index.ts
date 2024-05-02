import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env
console.log("MongoDB URI:", process.env.MONGODB_URI);


const app: Express = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGODB_URI; // Access MongoDB URI from environment variables

if (!mongoURI) {
  console.error("MongoDB URI is not provided in the environment variables.");
  process.exit(1); // Exit the process if MongoDB URI is not provided
}

app.use(express.json());
app.use(cors());

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
