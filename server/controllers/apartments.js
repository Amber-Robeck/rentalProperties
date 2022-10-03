import Building from "../models/Building.js";
import Apartment from "../models/Apartment.js";

export const getAllApartments = async (req, res, next) => {
    try {
        const allApartments = await Apartment.find({});
        res.status(200).json(allApartments);
    } catch (err) {
        next(err);
    }
};
export const getApartment = async (req, res, next) => { };

export const createApartment = async (req, res, next) => {
    const newApartment = new Apartment(req.body);
    try {
        const savedApartment = await newApartment.save();
        const updatedBuilding = await Building.findByIdAndUpdate(
            req.params.buildingId,
            { $push: { rooms: savedApartment._id } },
            { new: true }
        );
        res.status(200).json(`Apartment ${savedApartment.roomNumber} has been added to ${updatedBuilding.name}`);
    } catch (err) {
        next(err);
    }
};
export const updateApartment = async (req, res, next) => { };
export const deleteApartment = async (req, res, next) => { };