const express = require("express");
const router = express.Router();
const { clients } = require("../data/data");

// Register a new client
router.post("/", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }
  const client = { id: clients.length + 1, name, age, programs: [] };
  clients.push(client);
  res.status(201).json(client);
});

// Get all clients
router.get("/", (req, res) => {
  res.json(clients);
});

// Search client by ID
router.get("/:id", (req, res) => {
  const clientId = parseInt(req.params.id);
  const client = clients.find((c) => c.id === clientId);
  if (!client) {
    return res.status(404).json({ message: "Client not found" });
  }
  res.json(client);
});

module.exports = router;
