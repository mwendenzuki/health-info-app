const express = require("express");
const router = express.Router();
const { programs } = require("../data/data");

// Create a new program
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Program name is required" });
  }
  const program = { id: programs.length + 1, name };
  programs.push(program);
  res.status(201).json(program);
});

// Get all programs (optional)
router.get("/", (req, res) => {
  res.json(programs);
});

module.exports = router;
