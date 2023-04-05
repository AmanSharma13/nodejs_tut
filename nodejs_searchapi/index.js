const express = require("express");
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
