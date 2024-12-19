import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "6530fdad-941f-4f98-a873-e25cb412b7e6";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});


// <--------------------------------------- GET Method-------------------------------------------------->

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.log("Failed to make request:", error.message);
  }
});


// <--------------------------------------- POST Method-------------------------------------------------->

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.

  try{
    const result = await axios.post(API_URL + "/secrets", req.body, config );

      res.render("index.ejs", {content: JSON.stringify(result.data)})

  }catch (error) {
    console.log("Failed to make request:", error.message);
  }
});


// <--------------------------------------- PUT Method-------------------------------------------------->

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.put(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.log("Failed to make request:", error.message);
  }
});


// <--------------------------------------- PATCH Method-------------------------------------------------->

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.

  try {
    const result = await axios.patch(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.log();
  }
});


// <--------------------------------------- DELETE Method-------------------------------------------------->

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.

  try{
    const result = await axios.delete(
      API_URL + "/secrets/" + searchId,
      config
    )

    res.render("index.ejs", {content: JSON.stringify(result.data)})
  }catch (error) {
    console.log("Failed to make request:", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
