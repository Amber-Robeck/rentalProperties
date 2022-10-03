import express from "express";
import { getAllApartments, getApartment, createApartment, updateApartment, deleteApartment } from "../../controllers/apartments.js";
import { userVerify, adminVerify } from "../../utils/verify.js";

const router = express.Router();

// api/apartments

// Verified user routes || not logged in?
router.get("/", userVerify, getAllApartments);
router.get("/:id", userVerify, getApartment);

//Admin only routes
router.post("/:buildingId", adminVerify, createApartment);
router.put("/:id", adminVerify, updateApartment);

//TODO: Toggle active instead of deleting entirely
router.delete("/:id", adminVerify, deleteApartment);



export default router;