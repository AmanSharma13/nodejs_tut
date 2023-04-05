const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const port = 3000;

/*
Middleware - its is used to pass request thorught it and perform some operations
types- 
1. Application level middleware
2. router leve l middleware
3.

*/

// Application level middleware

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send("thsi is users page");
});

app.listen(port, () => {
  console.log(`app is running on port http://localhost:${port}`);
});
