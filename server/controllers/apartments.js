import Building from "../models/Building.js";
import Apartment from "../models/Apartment.js";

// Get all apartments, admin only route!
export const getAllApartments = async (req, res, next) => {
    try {
        const allApartments = await Apartment.find({});
        res.status(200).json(allApartments);
    } catch (err) {
        next(err);
    }
};
export const getApartment = async (req, res, next) => {
    try {
        const singleApartment = await Apartment.findOne(
            { _id: req.params.id }
        );
        res.status(200).json(singleApartment);
    } catch (err) {
        next(err);
    }
};

// Post new apartment, needs buildingId in params, admin only route!
export const createApartment = async (req, res, next) => {
    const newApartment = new Apartment(req.body);
    try {
        const savedApartment = await newApartment.save();
        const updatedBuilding = await Building.findByIdAndUpdate(
            req.params.buildingId,
            { $push: { rooms: savedApartment._id } },
            { new: true }
        );
        if (!updatedBuilding) {
            res.status(200).json(`Apartment ${savedApartment.roomNumber} has been created but could not add it to that building!`);
        }
        res.status(200).json(`Apartment ${savedApartment.roomNumber} has been added to ${updatedBuilding.name}`);
    } catch (err) {
        next(err);
    }
};

//Put update apartment, admin only route!
export const updateApartment = async (req, res, next) => {
    try {
        const updatedApartment = await Apartment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedApartment) {
            res.status(404).json("Unable to locate that apartment");
        }
        res.status(200).json(`Apartment ${updatedApartment.roomNumber} has been updated`);
    } catch (err) {
        next(err);
    }
};

// Delete apartment, admin only route!
export const deleteApartment = async (req, res, next) => {
    try {
        const deletedApartment = await Apartment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: `Apartment ${deletedApartment.roomNumber} deleted` });
    } catch (err) {
        next(err);
    }
};


// Put apartment, toggle rented boolean, admin only route!
export const toggleRented = async (req, res, next) => {
    try {
        const isRented = await Apartment.findByIdAndUpdate(
            { _id: req.params.id },
            [{ "$set": { "isRented": { "$eq": [false, "$isRented"] } } }],
            { new: true });
        res.status(200).json({ message: `Apartment ${isRented.roomNumber} updated` });
    } catch (err) {
        next(err);
    }
};