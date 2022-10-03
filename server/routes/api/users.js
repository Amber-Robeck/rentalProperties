import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser, loginUser, toggleActive } from "../../controllers/Users.js";
import { adminVerify, userVerify } from "../../utils/verify.js";
const router = express.Router();

// api/Users

router.get("/", adminVerify, getAllUsers);

router.get("/:id", userVerify, getUser);

router.post("/", createUser);

router.post("/login", loginUser);

router.put("/:id", userVerify, updateUser);

//TODO: Toggle active instead of deleting entirely
router.delete("/:id", userVerify, deleteUser);

router.put("/delete/:id", userVerify, toggleActive)



export default router;