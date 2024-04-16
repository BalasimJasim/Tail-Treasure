import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

<<<<<<< HEAD
//import { reviewsUser } from "./src/middlewares/reviewsUser.js";

import connectDB from "./src/utils/connectDB.js";
import userPath from "./src/routes/registration.js";

import { loginRouter } from "./src/routes/loginRouter.js";
=======
const reviewsUser = require("./src/middlewares/reviewsUser.js");
const reviews = require("./src/routes/reviews.js");
import connectDB from "./src/utils/connectDB.js";
import userRoute from "./src/routes/userRoute.js";
import authRoute from "./src/routes/authRoute.js";
>>>>>>> d12203db80ef1407963508556821189e901fc214

const app = express();
config();
app.use(express.json());
connectDB();
app.use(morgan("dev"));
app.use(cors());

const port = process.env.PORT || 4000;

<<<<<<< HEAD
//app.use("/auth");
//app.use("/user");
//app.use("/reviews");
app.use("/", userPath);
app.use("/login", loginRouter);
=======
app.use("/users", userRoute);
app.use("/auth", authRoute);

app.use("/reviews");
app.use("/", userPath);
app.use("/api/reviews", reviewRoutes);
>>>>>>> d12203db80ef1407963508556821189e901fc214

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err); // the error presest so i had to handle it here
  }
  res
    .status(err.status || 500)
    .send({ error: err.message || "something went wrong!" });
});

app.listen(port, () => {
  console.log(`[server] is running on ${port}`);
});
