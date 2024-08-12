const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 5000;
const connectDb = require("./DB/dbConnect");
const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
//
app.use(express.json());
app.use(cors());
//
app.use("/user", userRouter);
//
app.use("/post", postRouter);
//
app.listen(port, () => {
  connectDb();
  console.log(`Example app listening on port ${port}`);
});
