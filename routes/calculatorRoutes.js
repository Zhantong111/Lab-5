const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  const { num1, num2 } = req.query;
  let sum = parseInt(num1) + parseInt(num2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

router.get("/subtract", (req, res) => {
  const { num1, num2 } = req.query;
  let sum = parseInt(num1) - parseInt(num2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

router.get("/multiply", (req, res) => {
  const { num1, num2 } = req.query;
  let sum = parseInt(num1) * parseInt(num2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

router.get("/divide", (req, res) => {
  const { num1, num2 } = req.query;
  let sum = parseInt(num1) / parseInt(num2);
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

module.exports = router;
