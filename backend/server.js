import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

// import reviews from "./src/routes/reviews.js";
import connectDB from "./src/utils/connectDB.js";
import userRoute from "./src/routes/userRoute.js";
import authRoute from "./src/routes/authRoute.js";
import reviewsRouter from "./src/routes/reviewsRouter.js";

import productsRouter from "./src/routes/productsRouter.js";

import { favoritesRouter } from "./src/routes/favoritesRouter.js";
import passwordRoute from "./src/routes/passwordRoute.js";

import { getResetPasswordLink } from "./src/controller/passwordController.js";
import categoryRoute from "./src/routes/categoryRoute.js";

const app = express();
config();
app.use(express.json());
connectDB();
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const port = process.env.PORT || 4000;

app.use("/users", userRoute, favoritesRouter);
app.use("/auth", authRoute);
// app.use("/", userRoute);
app.use("/reviews", reviewsRouter);
app.use("/products", productsRouter);
app.use("/categories", categoryRoute);
app.use("/reset", passwordRoute);
app.get("/reset/:userId/reset/:token", getResetPasswordLink);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err); // the error preset so i had to handle it here
  }
  res
    .status(err.status || 500)
    .send({ error: err.message || "something went wrong!" });
});

app.listen(port, () => {
  console.log(`[server] is running on ${port}`);
});
