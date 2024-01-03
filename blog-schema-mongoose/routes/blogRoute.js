import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", getBlog);
router.post("/blogs", createBlog);
router.delete("/blogs/:id", deleteBlog);
router.put("/blogs/:id", updateBlog);

export default router;
