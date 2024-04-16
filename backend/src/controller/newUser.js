import { User } from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const login = async (data) => {
  const user = await User.findOne({ email: data.email });
  if (!user) {
    return false;
  }
  console.log(JSON.stringify(user));

  const hashedPassword = await bcrypt.hash(data.password, 10);
  console.log(data.password);

  const match = await bcrypt.compare(data.password, user.password);
  if (!match) {
    return false;
  }

  return user;
};
