import User from "../models/User.js"

export const getAllUsers = async (req, res, next) => { };

export const getUser = async (req, res, next) => { };

export const createUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser;
        res.status(200).json(savedUser);
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => { };

export const deleteUser = async (req, res, next) => { };