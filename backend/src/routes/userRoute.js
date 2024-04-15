import express from "express";
import { User } from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRoute = express.Router();

/**
 * get all users
 */

userRoute.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

userRoute.post("/register", async (req, res, next) => {
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

    // not commiting for some reason!!

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
});

export default userRoute;
