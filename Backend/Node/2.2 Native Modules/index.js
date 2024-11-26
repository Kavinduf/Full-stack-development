const fs = require("fs");

fs.writeFile("message.txt", "Hello from Node js", (err) => {
  if (err) throw err;
  console.log("The file has been saved");
});

fs.writeFile("Sample.txt", "Testinmg 123", (err) => {
  if (err) throw err;
  console.log("the file is done");
});

fs.readFile("message.txt", "utf8", (err, readData) => {
  if (err) throw err;
  console.log(readData);
});
