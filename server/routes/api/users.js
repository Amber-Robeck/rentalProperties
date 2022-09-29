import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from "../../controllers/Users.js";

const router = express.Router();

// api/Users

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/:id", updateUser);

//TODO: Toggle active instead of deleting entirely
router.delete("/:id", deleteUser);



export default router;