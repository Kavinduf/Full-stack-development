import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h6>My phone number is 0763622407</h6>");
});

app.get("/about", (req, res) => {
  res.send("<h5>My name is kavindu.</h5>");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
