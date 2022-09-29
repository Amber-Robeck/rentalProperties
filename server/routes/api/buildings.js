import express from "express";
import Building from "../../models/Building.js"

const router = express.Router();

// api/apartments

router.get("/", async (req, res) => {
    const allBuildings = await Building.find({});
    try {
        res.status(200).json(allBuildings);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const singleBuilding = await Building.findOne({ _id: req.params.id });
        res.status(200).json(singleBuilding);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    const newBuilding = new Building(req.body);
    try {
        const savedBuilding = await newBuilding.save();
        res.status(200).json(savedBuilding);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedBuilding = await Building.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedBuilding);
    } catch (err) {
        res.status(500).json(err);
    }
});

//TODO: Toggle active instead of deleting entirely
router.delete("/:id", async (req, res) => {
    try {
        const deletedBuilding = await Building.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: `Building ${deletedBuilding.name} deleted` });
    } catch (err) {
        res.status(500).json(err);
    }
});



export default router;