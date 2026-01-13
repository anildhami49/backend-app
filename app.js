const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

// API route
app.get("/api", (req, res) => {
  res.json({ message: "Backend API working" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
