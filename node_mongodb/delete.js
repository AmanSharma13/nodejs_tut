const dbConnect = require("./db_connect");

const deleteData = async () => {
  let data = await dbConnect();
  data = await data.deleteMany({ name: "Nord" });
  console.log(data);
  if (data.acknowledged) {
    console.log("record deleted");
  }
};

deleteData();
