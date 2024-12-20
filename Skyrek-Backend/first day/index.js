import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRoute.js";

const port = 3000;
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
const mongoURL =
  "mongodb+srv://admin:admin@cluster0.487de.mongodb.net/yourDatabaseName?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/students", studentRouter);

// Server Start
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
