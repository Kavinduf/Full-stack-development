import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
   let {fName, lName} = req.body;
   let count = fName.length + lName.length;
   const data = {
    letterCount : count
   }
   res.render("index.ejs", data)
})

app.post("/submit", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
