const express = require("express");
const router = express.Router();
// const isAuth = require("../middleware/is-auth");
const productContoller = require("../Controller/Product/ProductController");

router.get("/product", productContoller.getProducts);
router.post("/product", productContoller.createProduct);
router.patch("/product/:id", productContoller.archiveProduct);
// router.post("/apk-management", isAuth, ApkManagement.createApkManagement);
// router.put("/apk-management/:apkId", isAuth, ApkManagement.updateApkManagement);

module.exports = router;
