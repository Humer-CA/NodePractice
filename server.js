require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./Routes/index");
app.use(express.json());
app.use(router);

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGO_URL)

  .then(() => {
    app.listen(PORT, () => console.log(`Node API app is running on port ${PORT}`));
    console.log("connected to MonggoDB");
  })
  .catch((err) => {
    console.log(err);
  });
