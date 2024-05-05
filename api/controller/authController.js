import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import customeError from "../middleware/customeError.js";

dotenv.config();

const authController = {
    signup: async (req, res, next) => {
        try {
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
                return res.status(400).json({ message: "Please fill in all fields" });
            }
            // if (password.length < 6) {
            //     return res.status(400).json({ message: "Password must be at least 6 characters" });
            // }
            const foundOne = await User.findOne({ email });
            if (foundOne) {
                return res.status(400).json({ message: "Email already exists" });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, email, password: hashedPassword });
            await user.save();
            res.json({ message: "signup sucessfull" });
        } catch (error) {
            next(error.message);
        }
    },
};

export default authController;
