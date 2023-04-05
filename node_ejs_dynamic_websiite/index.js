const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/profile", (req, res) => {
  const user = {
    name: "Aman",
    email: "Aman@test.com",
    city: "Noida",
    skills: ["php", "js", "c++"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(`app is running at port http://localhost:${port}`);
});
