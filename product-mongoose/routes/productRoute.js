import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/products", createProduct);

export default router;
