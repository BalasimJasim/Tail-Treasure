import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import VerificationToken from "../models/verificationToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
export const registerUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      address: { street, city, state, postalCode },
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
      address: { street, city, state, postalCode },
    });

    await newUser.save();
    const verificationToken = new VerificationToken({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    });
    await verificationToken.save();

    //*************the link */
    const link = `${process.env.SERVER_DOMAIN}/auth/${newUser._id}/verify/${verificationToken.token}`;
    console.log("LINK AFTERRegester:", link);
    //**HTML TEMPLATE */
    const htmlTemplate = `
    <div>
      <p>Click on the link below to verify your email</p>
      <a href="${link}">Verify</a>
    </div>`;
    await sendEmail(newUser.email, "Verify Your Email", htmlTemplate);

    //**RESPOND TO THE USER  */

    res.status(201).json({
      message: "We sent to you an email, please verify your email address",
    });
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
    if (!user.isAccountVerified) {
      let verificationToken = await VerificationToken.findOne({
        userId: user._id,
      });

      if (!verificationToken) {
        verificationToken = new VerificationToken({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        });
        await verificationToken.save();
      }

      //** we send verfication email again here,just in case */
      const link = `${process.env.SERVER_DOMAIN}/auth/${user._id}/verify/${verificationToken.token}`;
      console.log("Link from login:", link);
      const htmlTemplate = `
      <div>
        <p>Click on the link below to verify your email</p>
        <a href="${link}">Verify</a>
      </div>`;
      await sendEmail(user.email, "Verify Your Email", htmlTemplate);

      return res.status(201).json({
        message: "We sent to you an email, please verify your email address",
      });
    }
    const payload = {
      userId: user._id,
      isAdmin: user.isAdmin,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "60d",
    });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
//**Verifying user account after clicking the LINK */
export const verifyUserAccount = async (req, res, next) => {
  try {
    console.log("User ID:", req.params.userId);
    console.log("Verification Token:", req.params.token);
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(400).json({ message: "invalid link!" });
    }
    const verificationToken = await VerificationToken.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!verificationToken) {
      return res.status(400).json({ message: "invalid link!" });
    }
    user.isAccountVerified = true;
    await user.save();

    //**removing the verification */

    // await verificationToken.toObject().remove();
    await VerificationToken.deleteOne({ _id: verificationToken._id });

    // await verificationToken.remove();

    //**Todo --> res.redirect(`${process.env.CLIENT_DOMAIN}/auth/login`);*/

    // res.status(200).json({ message: "Your Account is Verified!" });
    return res.redirect(`${process.env.CLIENT_DOMAIN}/login`);
  } catch (error) {
    next(error);
  }
};

//***in the front end create "not found page" */
