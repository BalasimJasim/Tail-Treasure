import express from "express";
import {
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
} from "../middlewar/verifyToken.js";

const userRoute = express.Router();

// Routes
userRoute.get("/", verifyTokenAndAuthorization, getAllUsers);
userRoute.get("/:userID", getUserByID);
userRoute.put("/:userID", verifyToken, updateUser);
userRoute.delete("/:userID", verifyToken, deleteUser);

export default userRoute;
