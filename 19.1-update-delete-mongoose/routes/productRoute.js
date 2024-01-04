import express from "express";
import {
  createProduct,
  deleteAllProducts,
  deleteProduct,
  getActiveProducts,
  getAllProducts,
  getProductById,
  getProductByPrice,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/active", getActiveProducts);
router.get("/products/price", getProductByPrice);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.delete("/products", deleteAllProducts);

export default router;
