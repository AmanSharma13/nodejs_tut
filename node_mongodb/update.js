const dbConnect = require("./db_connect");

const updateData = async () => {
  let data = await dbConnect();
  data = await data.updateMany(
    { name: "iphone" },
    { $set: { name: "iphone 15 pro max", price: "200000" } }
  );
  console.log(data);
};

updateData();
