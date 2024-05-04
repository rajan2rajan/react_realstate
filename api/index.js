import express from "express";
import connect from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
connect();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
