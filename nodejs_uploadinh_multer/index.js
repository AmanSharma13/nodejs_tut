const express = require("express");
const multer = require("multer");
const connectToMongo = require("./db");
const Product = require("./models/Product");

connectToMongo()
  .then(() => {
    console.log("Connected to mongodb successfully");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
const port = 5000;

// file upload function
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.filename + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("file uploading");
});

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`app is running on the port http://localhost:${port}`);
});
