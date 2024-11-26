import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {

  const d = new Date();
  let day = d.getDay();
  let data = '';
  

  if(day == 0 || day == 6 ){
    data = {
      answer: 'its time to have some fun'
    };   
  }else{
    data = {
      answer: 'its time to work hard'
    };
  }

  res.render("index.ejs", data);   

})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}) 