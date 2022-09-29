import Building from "../models/Building.js"

export const getAllBuildings = async (req, res, next) => {
    try {
        const allBuildings = await Building.find({});
        res.status(200).json(allBuildings);
    } catch (err) {
        next(err);
    }
};

export const getBuilding = async (req, res, next) => {
    try {
        const singleBuilding = await Building.findOne({ _id: req.params.id });
        res.status(200).json(singleBuilding);
    } catch (err) {
        next(err);
    }
};

export const createBuilding = async (req, res, next) => {
    const newBuilding = new Building(req.body);
    try {
        const savedBuilding = await newBuilding.save();
        res.status(200).json(savedBuilding);
    } catch (err) {
        next(err);
    }
};

export const updateBuilding = async (req, res, next) => {
    try {
        const updatedBuilding = await Building.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedBuilding);
    } catch (err) {
        next(err);
    }
};

export const deleteBuilding = async (req, res, next) => {
    try {
        const deletedBuilding = await Building.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: `Building ${deletedBuilding.name} deleted` });
    } catch (err) {
        next(err);
    }
};

