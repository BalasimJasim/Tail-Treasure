export const reviewsUser = (req, res, next) => {
  const { rating, comment } = req.body;
  if (!rating || !comment) {
    return res.status(400).json({ message: "Rating and comment are required" });
  }
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5" });
  }
  next();
};

app.post("/products/:productId/reviews", reviewsUser, async (req, res) => {
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
