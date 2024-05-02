import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import VerificationToken from "../models/verificationToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

export const sendResetPassLink = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne(email);
    if (!user) {
      res.status(404).json({ message: "user does not exist!" });
    }

    //** Create verficationtoken */

    const verificationtoken = await VerificationToken.findOne({
      userId: user._id,
    });
    if (!verificationtoken) {
      verificationtoken = new VerificationToken({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      });
    }
    const link = `${process.env.CLIENT_DOMAIN}/reset/${user._id}/verify/${verificationtoken.token}`;

    const htmlTemplate = `<a href="${link}"> click the link to reset your password </a>`;

    await sendEmail(user.email, "Reset Password", htmlTemplate);

    res.status(200).json({ message: " Password reset link sent to you email" });
  } catch (error) {
    next(error);
  }
};

//** Get the reset pass link*/
export const getResetPasswordLink = async (req, res, next) => {
  try {
    //**chicking if the user and token exist in the DB */

    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(400).json({ message: "invalid link!" });
    }
    const verificationtoken = await VerificationToken.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!verificationtoken) {
      return res.status(400).json({ message: "invalid link!" });
    }
    res.status(200).json({ message: "valid link" });
  } catch (error) {
    next(error);
  }
};

//** finally user is allowed to reset password */

export const resetPassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(400).json({ message: "invalid link!" });
    }

    const verificationtoken = await VerificationToken.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!verificationtoken) {
      return res.status(400).json({ message: "invalid link!" });
    }
    if (!user.isAccountVerified) {
      user.isAccountVerified = true;
    }

    //**HASING PASSWORD */

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    user.password = hashedPassword;

    await user.save();
    await VerificationToken.deleteOne({ _id: verificationtoken._id });

    res
      .status(200)
      .json({ message: "Password reset successfully, please login" });
  } catch (error) {
    next(error);
  }
};
