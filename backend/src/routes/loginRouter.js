import { Router } from "express";
import { login } from "../controller/newUser.js";

export const loginRouter = Router();

loginRouter.post("/", async (req, res, next) => {
  //try {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "email and Password are Required" });
  }

  const newUser = await login(req.body);
  if (!newUser) {
    return next({ status: 401, message: "Invalid email or Password" });
  }
  res.send({ newUser });
  //} catch (error) {
  //  next({ status: 500, message: error.message });
  // }
});
