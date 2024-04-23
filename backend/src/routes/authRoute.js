import express from "express";
import {
  registerUser,
  loginUser,
  verifyUserAccount,
} from "../controller/authController.js";
import { validateUser } from "../middlewares/userValidation.js";

const authRoute = express.Router();

authRoute.post("/register", validateUser, registerUser);
authRoute.post("/login", loginUser);
authRoute.get("/:userId/verify/:token", verifyUserAccount);

export default authRoute;
