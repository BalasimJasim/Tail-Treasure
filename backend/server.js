import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

const reviewsUser = require("./src/middlewares/reviewsUser.js");

import connectDB from "./src/utils/connectDB.js";
import userPath from "./src/routes/registration.js";


const app = express();
config();
app.use(express.json());
connectDB();
app.use(morgan("dev"));
app.use(cors());

const port = process.env.PORT || 4000;


app.use("/auth");
app.use("/user");
app.use("/reviews");
app.use("/", userPath);


app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ error: err.message || "something went wrong!" });
});

app.listen(port, () => {
  console.log(`[server] is running on ${port}`);
});
