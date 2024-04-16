const reviewsUser = (req, res, next) => {
  const { rating, comment } = req.body;
  if (!rating || !comment) {
    return res.status(400).json({ message: "Rating and comment are required" });
  }
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5" });
  }
  next();
};

router.post("/products/:productId/reviews", reviewsUser, async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.id;
    const { rating, comment } = req.body;

    const newReview = new Review({
      productId,
      userId,
      rating,
      comment,
    });
    await newReview.save();

    res.status(201).json({ message: "Review posted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// retrieve all the reviews
router.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// update reviews by id
router.put(
  "/reviews/:reviewId",
  reviewsUser,
  getReviewById,
  async (req, res) => {
    try {
      const { rating, comment } = req.body;
      const review = req.review;

      review.rating = rating;
      review.comment = comment;
      await review.save();

      res.json({ message: "Review updated successfully", review });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
// delete a review by id
router.delete("/reviews/:reviewId", getReviewById, async (req, res) => {
  try {
    const review = req.review;
    await review.remove();

    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
