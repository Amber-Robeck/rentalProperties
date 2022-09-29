import express from "express";
import { getAllBuildings, getBuilding, createBuilding, updateBuilding, deleteBuilding } from "../../controllers/buildings.js";

const router = express.Router();

// api/buildings

router.get("/", getAllBuildings);

router.get("/:id", getBuilding);

router.post("/", createBuilding);

router.put("/:id", updateBuilding);

//TODO: Toggle active instead of deleting entirely
router.delete("/:id", deleteBuilding);



export default router;