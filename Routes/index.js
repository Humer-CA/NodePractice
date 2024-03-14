const express = require("express");
const router = express.Router();

const productRoutes = require("../Routes/productRoutes");

router.use("/api", productRoutes);

module.exports = router;
