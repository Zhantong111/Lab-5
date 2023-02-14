const express = require("express");
const app = express();
const port = 3000;
const port1 = 8000;
const port2 = 80;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.send("You are at your profile page");
});

app.listen(port, () => {
  console.log(`Web server running at port ${port}`);
});

app.listen(port1, () => {
  console.log(`Web server running at port ${port1}`);
});

app.listen(port2, () => {
  console.log(`Web server running at port ${port2}`);
});
