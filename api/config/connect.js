import mongoose from "mongoose";
import dotenv from "dotenv";

const connect = async () => {
    try {
        dotenv.config();
        await mongoose.connect(process.env.URL);
        console.log("Connected to database");
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
};

export default connect;
