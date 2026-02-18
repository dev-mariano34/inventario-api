const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { validateCreateProduct } = require("../middleware/product.validation");

router.get("/", productController.getAllProducts);

router.post(
  "/",
  validateCreateProduct,
  productController.createProduct
);

router.patch("/:id/stock", productController.updateStock);

module.exports = router;
