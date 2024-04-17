import { Router } from "express";
import {
  addNewReview,
  deleteReview,
  getAllReview,
  getReview,
  updateReview,
} from "../controller/reviewController.js";
import { validateReview } from "../middlewares/reviewsValidation.js";

const reviewsRouter = Router();

reviewsRouter.route("/").get(getAllReview).post(validateReview, addNewReview);

reviewsRouter.route("/:productId").get(getReview);

reviewsRouter
  .route("/:id")
  .put(validateReview, updateReview)
  .delete(deleteReview);

export default reviewsRouter;
