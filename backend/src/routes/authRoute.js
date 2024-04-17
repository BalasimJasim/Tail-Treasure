import express from "express";
import { registerUser, loginUser } from "../controller/authController.js";
import { validateUser } from "../middlewares/userValidation.js";

const authRoute = express.Router();

// Routes
authRoute.post("/register", validateUser, registerUser);
authRoute.post("/login", loginUser);

export default authRoute;
