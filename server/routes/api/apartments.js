import express from "express";
import { getAllApartments, getApartment, createApartment, updateApartment, deleteApartment, toggleRented } from "../../controllers/apartments.js";
import { userVerify, adminVerify } from "../../utils/verify.js";

const router = express.Router();

// api/apartments

// Verified user routes || not logged in?
router.get("/", userVerify, getAllApartments);
router.get("/:id", userVerify, getApartment);

//Admin only routes
router.post("/:buildingId", adminVerify, createApartment);
router.put("/:id", adminVerify, updateApartment);
router.delete("/:id", adminVerify, deleteApartment);
//toggle rented boolean
router.put("/rented/:id", toggleRented)



export default router;