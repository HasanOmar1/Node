import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router;
