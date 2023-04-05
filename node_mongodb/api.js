const express = require("express");
const dbConnect = require("./db_connect");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();

  res.send({ data });
});

app.listen(port, () => {
  console.log(`app is running at port http://localhost:${port}`);
});
