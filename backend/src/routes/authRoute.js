import express from "express";

import { validateUser } from "../middlewar/userValidation.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import { validateUser } from "../middlewares/userValidation.js";
import { verifyTokenAndAuthorization } from "../middlewares/veryfyToken.js";


import { registerUser, loginUser } from "../controller/authController.js";

const authRoute = express.Router();


  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ error: "invalid Email or password!" });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ error: "invalid Email or password!" });
      }
      const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY, {
        expiresIn: "6h",
      });
      res.status(200).json({ token }); /// use cookies
    } catch (error) {
      next(error);
    }
  }
);

authRoute.post("/register", validateUser, registerUser);
authRoute.post("/login", loginUser);


export default authRoute;
