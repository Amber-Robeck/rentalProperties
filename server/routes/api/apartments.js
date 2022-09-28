import express from "express";
import Apartment from "../../models/Apartment.js"

const router = express.Router();

// api/apartments

router.get("/", async (req, res) => {
    const allApartments = await Apartment.find({});
    try {
        res.status(200).json(allApartments);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const singleApartment = await Apartment.findOne({ _id: req.params.id });
        res.status(200).json(singleApartment);
    } catch (err) {
        res.status(500).json(err);
    }
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

router.put("/:id", async (req, res) => {
    try {
        const updatedApartment = await Apartment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedApartment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//TODO: Toggle active instead of deleting entirely
router.delete("/:id", async (req, res) => {
    try {
        const deletedApartment = await Apartment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: `Apartment ${deletedApartment.name} deleted` });
    } catch (err) {
        res.status(500).json(err);
    }
});



export default router;