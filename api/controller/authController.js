import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import customeError from "../middleware/customeError.js";
import jwt from "jsonwebtoken";

dotenv.config();

const authController = {
    // this is for register an user
    signup: async (req, res, next) => {
        try {
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
                return next(customeError("please fill in the form", 400));
            }
            // if (password.length < 6) {
            //     return res.status(400).json({ message: "Password must be at least 6 characters" });
            // }
            const foundOne = await User.findOne({ email });
            if (foundOne) {
                return next(customeError("Email already exists", 400));
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, email, password: hashedPassword });
            await user.save();
            res.status(200).json({ message: "User created successfully" });
        } catch (error) {
            next(error.message);
        }
    },

    // this is for login an user
    signin: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                // return res.status(400).json({ message: "Please fill in all fields" });
                return next(customeError("Please fill in all fields", 400));
            }
            const user = await User.findOne({ email });
            if (!user) {
                // return res.status(400).json({ message: "Email not found" });
                return next(customeError("Email not found", 404));
            }
            const userPassword = await bcrypt.compare(password, user.password);
            if (!userPassword) {
                // return res.status(400).json({ message: "Invalid password" });
                return next(customeError("Invalid password", 401));
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
            // remove password form
            const { password: pass, ...withoutPassword } = user._doc;
            res.cookie("token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 25892000000),
            })
                .status(200)
                .json(withoutPassword);
        } catch (error) {
            next(error.message);
        }
    },

    // this is for google oauth
    googleOAuth: async (req, res, next) => {
        try {
            const { name, email, photo } = req.body;
            const user = await User.findOne({ email });
            if (user) {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: "1d",
                });
                //remove password from list
                const { password: pass, ...withoutPassword } = user._doc;
                res.cookie("access_token", token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 25892000000),
                })
                    .status(200)
                    .json(withoutPassword);
            } else {
                const generatePassword = Math.random().toString(36).slice(-8);
                const hashedPassword = await bcrypt.hash(generatePassword, 10);
                const username =
                    name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-5);
                const newUser = new User({
                    username: username,
                    email: email,
                    password: hashedPassword,
                    photo: photo,
                });
                await newUser.save();
                const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
                const { password: pass, ...withoutPassword } = newUser._doc;
                res.cookie("token", token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 25892000000),
                })
                    .status(200)
                    .json(withoutPassword);
            }
        } catch (error) {
            next(error.message);
        }
    },

    // this is for logout an user
    signOut: async (req, res, next) => {
        try {
            res.clearCookie("token").status(200).json({ message: "Sign out successfully" });
        } catch (error) {
            next(error.message);
        }
    },
};

export default authController;
