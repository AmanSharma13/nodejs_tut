const mongoose = require("mongoose");

const mongoURI = "mongodb://0.0.0.0:27017/moongoose_test";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
