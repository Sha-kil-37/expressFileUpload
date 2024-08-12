const express = require("express");
const router = express.Router();
const userModel = require("../Models/userSchema");
const userEmailVerify = require("../helpers/emailVerification");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const chekUser = require("../middleWear/userMiddlewear");
//
router.post("/registration",async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  //
  bcrypt.hash(password, saltRounds, async function (err, hash) {
    const token = await jwt.sign({ id: email }, "sakil");
    const user = new userModel({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hash,
      token: token,
    });
    //
    await user
      .save()
      .then(() => {
        console.log("creat user succes");
        userEmailVerify(email);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  //
});
//
router.get("/", chekUser, (req, res) => {
  res.send("abcd");
});
//
module.exports = router;
