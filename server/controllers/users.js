import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => { };

export const getUser = async (req, res, next) => { };

export const createUser = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            city: req.body.city,
            address: req.body.address,
            isAdmin: req.body.isAdmin
        });
        // const savedUser = await newUser;
        res.status(200).json(newUser);
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => { };

export const deleteUser = async (req, res, next) => { };