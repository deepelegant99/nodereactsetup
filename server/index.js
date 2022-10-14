const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to Home");
});

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to my API. Hope you have fun!" });
});

app.listen(PORT, () => {
  console.log("Listening at port:", PORT);
});
