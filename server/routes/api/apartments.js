import express from "express";
import Apartment from "../../models/Apartment.js"

const router = express.Router();

// api/apartments

router.get("/", (req, res) => {
    res.send('apartments data')
});

router.post("/", async (req, res) => {
    const newApartment = new Apartment(req.body);
    try {
        const savedApartment = await newApartment.save();
        res.status(200).json(savedApartment);
    } catch (err) {
        res.status(500).json(err);
    }
});



export default router;