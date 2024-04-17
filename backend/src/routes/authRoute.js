import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import { validateUser } from "../middlewares/userValidation.js";
import { verifyTokenAndAuthorization } from "../middlewares/veryfyToken.js";

const authRoute = express.Router();

/**
 * POST: Register a new user
 * @route /auth/register
 */
authRoute.post("/register", validateUser, async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      address: { street, city, state, postalCode },
      phoneNumber,
      bonusPoints,
    } = req.body;

    // checkinf if the user already exist

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // hashing the row password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user...
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      address: { street, city, state, postalCode },
      bonusPoints,
    });

    const result = await newUser.save();
    const token = jwt.sign({ userID: result._id }, process.env.SECRET_KEY, {
      expiresIn: "6h",
    });

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
});

/**
 * POST: Login user
 * @route /auth/login
 */
authRoute.post(
  "/login",

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

export default authRoute;

/// Use cookies here , line 81
