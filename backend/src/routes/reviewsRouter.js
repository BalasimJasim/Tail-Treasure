import { Router } from "express";

const reviewsRouter = Router();

reviewsRouter.route("/").get(getAllReview).post(addNewReview);

reviewsRouter
  .route("/:productId")
  .get(getReview)
  .put(updateReview)
  .delete(deleteReview);

export default reviewsRouter;
