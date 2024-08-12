const mongoose = require("mongoose");
//
const connectDb = async () => {
  console.log(process.env.URL);
  await mongoose
    .connect(`${process.env.URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then(() => {
      console.log("DB connected succesfully");
    })
    .catch((err) => console.log("MongoDB connection error:", err));
};

module.exports = connectDb;
