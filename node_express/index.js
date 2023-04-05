const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  //   res.status(400).json({ error: "404 not found" });
  res.status(400).send("<h1>404 not found</h1>");
});

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
