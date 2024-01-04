import express from "express";
import {
  createProduct,
  getActiveProducts,
  getAllProducts,
  getProductById,
  getProductByPrice,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/active", getActiveProducts);
router.get("/products/price", getProductByPrice);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);

export default router;
