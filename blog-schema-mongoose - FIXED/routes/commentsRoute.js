import express from "express";
import {
  createComment,
  deleteAllComments,
  getAllComments,
} from "../controllers/commentsController.js";

const router = express.Router();

router.get("/comments", getAllComments);
router.post("/comments", createComment);
router.delete("/comments", deleteAllComments);

export default router;
