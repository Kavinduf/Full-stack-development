import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
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

app.get("/", (req, res) => {
  console.log("Get request");
  res.json({ message: "Good Morning" + req.body.name });
});

app.post("/", (req, res) => {
  let studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    height: Number,
  });

  let Student = mongoose.model("student", studentSchema);
  // modelname and JSON structure
  let newStudent = req.body;

  let student = new Student(newStudent);

  student
    .save()
    .then(() => {
      res.json({
        Message: "Student saved successfully",
      });
    })
    .catch(() => {
      res.json({
        Message: "Student could not be saved",
      });
    });
});

app.delete("/", (req, res) => {
  console.log("Delete Request");
  req.json({ message: "This is delete" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
