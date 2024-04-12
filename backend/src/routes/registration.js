import express from "express";
import User from "./models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRegistration = express.Router();

userRegistration.post("/register", async (req, res, next) => {
  try {
    // here i still need the User model!!
    const { username, email, password } = req.body;

    // checkinf if the user already exist

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // hashing the row password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user...
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const result = await newUser.save();
    const token = jwt.sign({ userID: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
});

export default userRegistration;
