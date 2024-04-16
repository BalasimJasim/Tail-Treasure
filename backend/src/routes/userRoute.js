import express from "express";
import { User } from "../models/UserModel.js";

import {
  verifyToken,
  verifyTokenAndAuthorization,
} from "../middlewar/veryfyToken.js";

const userRoute = express.Router();

/**
 * get all users
 */

userRoute.get("/", verifyTokenAndAuthorization, async (req, res, next) => {
  try {
    const users = await User.find();
    // const token = req.headers.token;
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

/**
 * GET user profile by ID
 * @route /users/userID
 */
userRoute.get("/:userID", async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: "user not found!" });
    }
  } catch (error) {
    next(error);
  }
});

/**
 * PUT
 * update user profile
 * @route /users/:userID
 */

userRoute.put("/:userID", verifyToken, async (req, res, next) => {
  try {
    if (req.user._id !== req.params.userID) {
      return res.status(403).json({ message: "unauthorized requist" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userID,
      {
        $set: {
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }

      //password is not sent!
    ).select("-password");
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE
 * delete user profile
 * @route /users/userID
 */
userRoute.delete("/:userID", verifyToken, async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userID);
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    next(error);
  }
});
export default userRoute;
