const dbConnect = require("./db_connect");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertOne({
    name: "iphone",
    brand: "apple",
    price: "150000",
  });
  console.log("insert function");
  console.log(result);
};

insert();
