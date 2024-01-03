import express from "express";
import {
  createComment,
  getAllComments,
} from "../controllers/commentsController.js";

const router = express.Router();

router.get("/comments", getAllComments);
router.post("/comments", createComment);

export default router;
