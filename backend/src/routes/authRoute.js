import express from "express";
import { validateUser } from "../middlewar/userValidation.js";

import { registerUser, loginUser } from "../controller/authController.js";

const authRoute = express.Router();

authRoute.post("/register", validateUser, registerUser);
authRoute.post("/login", loginUser);

export default authRoute;
