import User from "../models/userModel.js";
// import errorhandler from "../middleware/errorHandler.js";

const userController = {
    getAllUsers: async (req, res, next) => {
        try {
            res.json({ message: "Get all users" });
        } catch (error) {
            next(error);
        }
    },
};

export default userController;
