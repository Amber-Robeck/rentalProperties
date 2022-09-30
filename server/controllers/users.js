import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find({});
        res.status(200).json(allUsers);
    } catch (err) {
        next(err);
    }
};

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
        await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        next(err);
    }
};

export const loginUser = async (res, req, next) => {
    try {
        console.log(req)
        const user = await User.findOne({ username: req.body.username });
        // if (!user) return res.status(400).json("Invalid credentials");

        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if (!correctPassword) return res.status(400).json("Invalid credentials");

        //Destructuring user to send back user without password or isAdmin
        const { password, isAdmin, ...restOfUser } = user._doc;
        res.status(200).json({ ...restOfUser });
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => { };

export const deleteUser = async (req, res, next) => { };