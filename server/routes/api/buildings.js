import express from "express";
import { getAllBuildings, getBuilding, createBuilding, updateBuilding, deleteBuilding } from "../../controllers/buildings.js";
import { userVerify, adminVerify } from "../../utils/verify.js";

const router = express.Router();

// api/buildings

// Verified user routes || not logged in?
router.get("/", userVerify, getAllBuildings);
router.get("/:id", userVerify, getBuilding);

//Admin only routes
router.post("/", adminVerify, createBuilding);
router.put("/:id", adminVerify, updateBuilding);

//TODO: Toggle active instead of deleting entirely
router.delete("/:id", adminVerify, deleteBuilding);



export default router;