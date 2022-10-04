import Building from "../models/Building.js"

//Get all buildings, user verified route!
export const getAllBuildings = async (req, res, next) => {
    try {
        const allBuildings = await Building.find({});
        res.status(200).json(allBuildings);
    } catch (err) {
        next(err);
    }
};

// Get single building, user verified route!
export const getBuilding = async (req, res, next) => {
    try {
        const singleBuilding = await Building.findOne(
            { _id: req.params.id }
        );
        if (!singleBuilding) {
            res
                .status(404)
                .json("Unable to find a building with that information")
        }
        res.status(200).json(singleBuilding);
    } catch (err) {
        next(err);
    }
};

// Post new building, admin only route!
export const createBuilding = async (req, res, next) => {
    const newBuilding = new Building(req.body);
    try {
        const savedBuilding = await newBuilding.save();
        res.status(200).json(savedBuilding);
    } catch (err) {
        next(err);
    }
};

// Put update building, admin only route!
export const updateBuilding = async (req, res, next) => {
    try {
        const updatedBuilding = await Building.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!updatedBuilding) {
            res
                .status(404)
                .json("Unable to find a building with that information")
        }
        res.status(200).json(updatedBuilding);
    } catch (err) {
        next(err);
    }
};

//Delete building, admin only route!
export const deleteBuilding = async (req, res, next) => {
    try {
        const deletedBuilding = await Building.findByIdAndDelete(req.params.id);
        if (!deletedBuilding) {
            res
                .status(404)
                .json("Unable to find a building with that information")
        }
        res.status(200).json({ message: `Building ${deletedBuilding.name} deleted` });
    } catch (err) {
        next(err);
    }
};

