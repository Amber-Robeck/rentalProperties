import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Get all users-admin route only!
export const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find({});
        res
            .status(200)
            .json(allUsers);
    } catch (err) {
        next(err);
    }
};

// Get single user-verified user route! 
export const getUser = async (req, res, next) => {
    try {
        const singleUser = await User.findOne({ _id: req.params.id });
        if (!singleUser) {
            res
                .status(404)
                .json("Unable to find a user with that information")
        }
        res
            .status(200)
            .json(singleUser);
    } catch (err) {
        next(err);
    }
};

// Post create user, no auth route!
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
        res
            .status(200)
            .json(newUser);
    } catch (err) {
        next(err);
    }
};

// Post login user, no auth route!
export const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res
            .status(400)
            .json("Invalid credentials");

        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if (!correctPassword) return res
            .status(400)
            .json("Invalid credentials");

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)
        //Destructuring user to send back user without password or isAdmin
        const { password, isAdmin, ...restOfUser } = user._doc;
        res
            .cookie("access_token", token, { httpOnly: true })
            .status(200).json({ ...restOfUser });
    } catch (err) {
        next(err);
    }
};

// Put update user, verified user route!
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!updatedUser) {
            res
                .status(404)
                .json("Unable to find a user with that information")
        }
        res
            .status(200)
            .json(updatedUser);
    } catch (err) {
        next(err);
    }
};

// Delete user, admin only route!
export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            res
                .status(404)
                .json("Unable to find a user with that information")
        }
        res
            .status(200)
            .json({ message: `User ${deletedUser.username} deleted` });
    } catch (err) {
        next(err);
    }
};

// Put user, toggle active boolean, verified user route!
export const toggleActive = async (req, res, next) => {
    try {
        const inactiveUser = await User.findByIdAndUpdate(
            { _id: req.params.id },
            [{ "$set": { "isActive": { "$eq": [false, "$isActive"] } } }],
            { new: true });
        if (!inactiveUser) {
            res
                .status(404)
                .json("Unable to find a user with that information")
        }
        res
            .status(200)
            .json({ message: `User ${inactiveUser.username} deleted` });
    } catch (err) {
        next(err);
    }
};