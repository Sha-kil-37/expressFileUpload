const express = require("express");
const router = express.Router();
const fileUpload = require("../utils/multerFileUpload");
const postCloudinary = require("../utils/cloudnary");
const postSchema = require("../Models/postSchema");
//
router.post("/creat_post", fileUpload.single("product"), async (req, res) => {
  const { name, price, details, catagory } = req.body;
  const postCloud = await postCloudinary.uploader.upload(req.file.path);
  const post = new postSchema({
    name: name,
    price: price,
    details: details,
    catagory: catagory,
    product: postCloud.secure_url,
    product_id: postCloud.public_id,
  });
  await post
    .save()
    .then(() => {
      console.log("post creat succes");
    })
    .catch((error) => {
      console.log(error);
    });
});
//
router.get("/get_post", (req, res) => {
  res.send("get post data");
});
//
module.exports = router;
// catagory,price,details,name,product
