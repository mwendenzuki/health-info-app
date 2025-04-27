const express = require("express");
const router = express.Router();
const { clients, programs } = require("../data/data");

// Enroll client into a program
router.post("/", (req, res) => {
  const { clientId, programId } = req.body;
  const client = clients.find((c) => c.id === clientId);
  const program = programs.find((p) => p.id === programId);

  if (!client || !program) {
    return res.status(404).json({ message: "Client or Program not found" });
  }

  // Prevent duplicate enrollment
  const alreadyEnrolled = client.programs.find((p) => p.id === programId);
  if (alreadyEnrolled) {
    return res
      .status(400)
      .json({ message: "Client already enrolled in this program" });
  }

  client.programs.push({ id: program.id, name: program.name });
  res.status(200).json({ message: "Client enrolled successfully", client });
});

module.exports = router;
