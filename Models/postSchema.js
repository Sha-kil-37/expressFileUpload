const mongoose = require("mongoose");
const { Schema } = mongoose;
//
const postSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  details: {
    type: String,
    require: true,
  },
  catagory: {
    type: String,
    require: true,
  },
  product: {
    type: String,
    require: true,
  },
  product_id: {
    type: String,
    require: true,
  },
});
//
module.exports = mongoose.model("post", postSchema);
