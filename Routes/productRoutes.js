const express = require("express");
const router = express.Router();
// const isAuth = require("../middleware/is-auth");
const productContoller = require("../Controller/Product/ProductController");

router.get("/", productContoller.getProducts);
router.post("/", productContoller.createProduct);
router.patch("/:id", productContoller.archiveProduct);
// router.post("/apk-management", isAuth, ApkManagement.createApkManagement);
// router.put("/apk-management/:apkId", isAuth, ApkManagement.updateApkManagement);

module.exports = router;
