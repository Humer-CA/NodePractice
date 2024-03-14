const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./Routes/index");
const Product = require("./models/productModel");
app.use(express.json());
app.use(router);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:nodePassword@cluster0.zbnyv56.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )

  .then(() => {
    app.listen(3000, () => console.log(`Node API app is running on port 3000`));
    console.log("connected to MonggoDB");
  })
  .catch((err) => {
    console.log(err);
  });
