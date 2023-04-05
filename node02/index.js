const express = require("express");
const data = require("./data");
const app = express();
const port = 3000;
const path = require("path");
const multer = require("multer");

// cors -> Cross Orgin Resource Sharing
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).json(data);
});
app.post("/profile", upload.single("avatar"), function (req, res, next) {});

const storageEngine = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
