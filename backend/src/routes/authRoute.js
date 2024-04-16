import express from "express";

import { validateUser } from "../middlewar/userValidation.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import { validateUser } from "../middlewares/userValidation.js";
import { verifyTokenAndAuthorization } from "../middlewares/veryfyToken.js";


import { registerUser, loginUser } from "../controller/authController.js";

const authRoute = express.Router();

authRoute.post("/register", validateUser, registerUser);
authRoute.post("/login", loginUser);

export default authRoute;
