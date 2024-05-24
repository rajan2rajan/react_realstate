import express from "express";
import cookieParser from "cookie-parser";
import connect from "./config/connect.js";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import ErrorHander from "./middleware/errorHandler.js";
import cors from "cors";

const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to database
connect();

// Enable CORS so that the client can make requests to the server( otherwise request cannot be made to the server)
app.use(cors());

// is used to parse incoming request bodies in JSON format otherwise req.body will be undefined
app.use(express.json());

// is used to parse incoming request cookies
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.use(ErrorHander);

app.listen(process.env.PORT, () => {
    console.log(`app listening at http://127.0.0.1:${process.env.PORT}`);
});
