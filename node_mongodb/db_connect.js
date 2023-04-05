const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);
const dbName = "mydb";

async function dbConnect() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  return db.collection("ecomm");
}

module.exports = dbConnect;
