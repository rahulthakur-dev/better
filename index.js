const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello from Node.js CI/CD on DigitalOcean!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});