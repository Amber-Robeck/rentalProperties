import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser, loginUser } from "../../controllers/Users.js";
import { adminVerify, userVerify } from "../../utils/verify.js";
const router = express.Router();

// api/Users

router.get("/", adminVerify, getAllUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.post("/login", loginUser);

router.put("/:id", userVerify, updateUser);

//TODO: Toggle active instead of deleting entirely
router.delete("/:id", deleteUser);



export default router;