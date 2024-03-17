const express = require("express");
const router = express.Router();

const productRoutes = require("../Routes/productRoutes");

router.use("/api/product", productRoutes);
// router.use("/api/product", productRoutes);

module.exports = router;
