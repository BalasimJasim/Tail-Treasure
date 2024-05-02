import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
} from "../middlewares/veryfyToken.js";

const userRoute = express.Router();

userRoute.get("/", verifyTokenAndAuthorization, getAllUsers);
userRoute.get("/:userID", getUserById);
userRoute.put("/:userID", verifyToken, updateUser);
userRoute.delete("/:userID", verifyToken, deleteUser);

export default userRoute;
