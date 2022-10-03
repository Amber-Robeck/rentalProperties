import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser, loginUser, toggleActive } from "../../controllers/Users.js";
import { adminVerify, userVerify } from "../../utils/verify.js";
const router = express.Router();

// api/users

// NO AUTH routes
router.post("/", createUser);
router.post("/login", loginUser);

// Verified user routes
router.get("/:id", userVerify, getUser);
router.put("/:id", userVerify, updateUser);

// Toggle active instead of deleting entirely
router.put("/delete/:id", userVerify, toggleActive)

// ADMIN routes
router.get("/", adminVerify, getAllUsers);
router.delete("/:id", adminVerify, deleteUser);

export default router;