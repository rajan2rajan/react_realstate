import express from "express";
import authController from "../controller/authController.js";

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/google", authController.googleOAuth);

export default router;
