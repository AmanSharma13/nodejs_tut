const express = require("express");
const connectToMongo = require("./connect");
const Product = require("./models/Product");
// connectToMongo();

connectToMongo()
  .then(() => {
    console.log("Connected to mongodb successfully");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
const port = 5000;

app.get("/", async (req, res) => {
  try {
    let data = await Product.find();
    res.send(data);
  } catch (error) {
    res.status(400).send({ status: "Unsuccessful", err: error });
  }
});

app.post("/addproduct", async (req, res) => {
  console.log(req.body.name);
  let { name, brand, price } = req.body;
  try {
    let data = await Product.create({ name, brand, price });
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    // res.status(4000).send("not working");
    res.sendStatus(404);
  }
});

app.delete("/delete/:_id", async (req, res) => {
  // let data = await Product.findById(req.params._id);
  let data = await Product.deleteOne(req.params);
  console.log(data);
  res.status(200).send(data);
});

app.put("/update/:id", async (req, res) => {
  let data = await Product.updateOne(req.params, { $set: req.body });
  res.status(200).send(data);
});
// app.put("/update/:_id", async(req, res)=>{
//   let data
// })

app.get("/products", async (req, res) => {});

app.listen(port, () => {
  console.log(`app is running at port http://localhost:${port}`);
});
