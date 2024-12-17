import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";

const port = 3000;

let mongoURL =
  "mongodb+srv://admin:admin@cluster0.487de.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL);

let connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb connection successful");
});

let app = express();

app.get("/", (req, res) => {
  console.log("request sent");
});

app.post("/", () => {
  console.log("post");

  let studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    height: Number,
  });

  let Student = mongoose.model("students", studentSchema);

  let newStudent = req.body;

  let student = new Student({ newStudent });

  student
    .save()
    .then(() => {
      res.json({
        message: "new student saved successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "error saving student",
      });
    });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
