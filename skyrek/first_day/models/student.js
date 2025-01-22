import mongoose from "mongoose";

let studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  height: Number,
});

let Student = mongoose.model("student", studentSchema);

export default Student;
