import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";

export const registerUser = async (req, res, next) => {
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

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY, {
      expiresIn: "6h",
    });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
