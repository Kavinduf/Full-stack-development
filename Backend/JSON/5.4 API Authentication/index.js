import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "kavinduf2";
const yourPassword = "hellobunny";
const yourAPIKey = "1fb933e9-2217-4eec-92a2-1a833c3196d2";
const yourBearerToken = "6530fdad-941f-4f98-a873-e25cb412b7e6";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get(`${API_URL}random`);
  
    // Log the response data only
    const result = response.data;
  
    // Send the result to the EJS template
    res.render("index.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

    try{
      const response =  await axios.get(`${API_URL}all`, {
        auth: {
          username: yourUsername,
          password: yourPassword
        }, 
      });

      const result = response.data

      if(result){
        res.render("index.ejs", { content: JSON.stringify(result) });
      }

    }catch (error) {
      console.error("Failed to make request:", error.message);
    }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const response = await axios.get(`${API_URL}filter?`, {
      params: {
        apiKey: yourAPIKey,
        score: 5,
      },
    })

    let result = response.data;

    if(result){
      res.render('index.ejs', {content: JSON.stringify(result)});
    }

  }catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

  try{
    let response = await axios.get(`${API_URL}secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      }
    })

    let result = response.data;

    if(result){
      res.render('index.ejs', {content: JSON.stringify(result)});
    }

  }catch (error){
    console.error("Failed to make request:", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
