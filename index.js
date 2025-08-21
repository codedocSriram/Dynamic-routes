const express = require("express");
const app = express();

app.get("/welcome/:username", (req, res) => {
  const username = req.params.username;

  const role = req.query.role || "Guest";

  res.send(`<h1>Welcome ${username}, your role is ${role}</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
