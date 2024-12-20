export function getStudents(req, res) {
  studentRouter.find().then((result) => {
    res.json(result);
  });
}

export function postStudents(req, res) {
  let studentData = req.body;

  let student = new Student(studentData);

  student
    .save()
    .then(() => {
      res.json({
        message: "Student added successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "Failed to add student",
      });
    });
}
