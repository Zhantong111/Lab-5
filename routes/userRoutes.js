const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { username, password } = req.query;
  res.send("All Users");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Get User ID: " + id);
});

router.get("/new", (req, res) => {
  res.send("Add Users");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

module.exports = router;
