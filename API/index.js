const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

//Configuration for .env
dotenv.config();

//Connect to MongoDB
mongoose.connect(
  process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
      console.log(err);
  });

//Routes
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

//Configuration for Port 
app.listen(process.env.PORT, () => {
  console.log( `Backend server is running on port ${process.env.PORT}`);
});


