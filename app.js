const express = require("express");
const app = express();
const clientRoutes = require("./routes/clients");
const programRoutes = require("./routes/programs");
const enrollmentRoutes = require("./routes/enrollments");

app.use(express.json());

// Mount the routers
app.use("/clients", clientRoutes);
app.use("/programs", programRoutes);
app.use("/enrollments", enrollmentRoutes);

// Basic home route
app.get("/", (req, res) => {
  res.send("Health Information System API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
