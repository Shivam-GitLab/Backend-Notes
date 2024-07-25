require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Sam");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please login at chai aur code");
});

app.get("/chai", (req, res) => {
  res.send("<h2>Chai Aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

