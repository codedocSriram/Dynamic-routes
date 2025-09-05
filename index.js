const express = require("express");
const app = express();

app.get("/welcome/sriram", (req, res) => {
  const { role } = req.query;
  res.send(`<h1>Welcome Sriram! Your role is ${role}`);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
