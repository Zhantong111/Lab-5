const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.send("You are at your profile page");
});

app.listen(port, () => {
  console.log(`Web server running at port ${port}`);
});
