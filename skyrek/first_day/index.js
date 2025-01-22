import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRoute.js";
const app = express();
const port = 3000;

app.use(bodyParser.json());

let mongoUrl =
  "mongodb+srv://admin:admin@cluster0.487de.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl);

let connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to DB");
});

app.use("/students", studentRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
