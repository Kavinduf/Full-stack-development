import Student from "../models/student.js";

export function getStudents(req, res) {
  Student.find().then((result) => {
    res.json(result);
  });
}

export function postStudents(req, res) {
  let studentData = req.body;
  let student = new Student(studentData);

  Student.create()
    .then(() => {
      res.json({
        message: "Student Saved successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "Student save failed",
      });
    });
}
