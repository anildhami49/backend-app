const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/api", (req, res) => {
  res.json({ message: "Backend working fine" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
