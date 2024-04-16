import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import connectDB from "./src/utils/connectDB.js";
import userRoute from "./src/routes/userRoute.js";
import authRoute from "./src/routes/authRoute.js";

const app = express();
config();
app.use(express.json());
connectDB();
app.use(morgan("dev"));
app.use(cors());

const port = process.env.PORT || 4000;

app.use("/users", userRoute);
app.use("/auth", authRoute);

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
