const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  brand: String,
  price: String,
});

module.exports = mongoose.model("Product", ProductSchema);
