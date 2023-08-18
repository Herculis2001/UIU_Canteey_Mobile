const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const bodyParser = require("body-parser");
// const { bkashController } = require('./api/bkashController'); 
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// // Use the bkashController routes
// app.use('/api/bkash', bkashController); 

require("./db");
app.use(express.json());
app.use(require("./router/authorization")); //linking the router file to be in use
app.get("/", (req, res) => {
  res.send(`hello this is backend`);
});

app.get("/student_login", (req, res) => {
  res.send(`Hello this is from server attaching the token khi khi`);
});
app.get("/faculty_login", (req, res) => {
  res.send(`Hello this is from server attaching the token khi khi`);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});