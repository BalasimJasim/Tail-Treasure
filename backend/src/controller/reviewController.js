import { Review } from "../models/ReviewModel.js";

export const getAllReview = async (req, res, next) => {
  try {
    const reviews = await Review.find({});
    res.json({ message: "success", data: reviews });
  } catch (error) {
    next(error);
  }
};

export const getReview = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const review = await Review.findOne({ productId });
    res.json({ message: "success", data: review });
  } catch (error) {
    next(error);
  }
};

export const addNewReview = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { rating, comment } = req.body;
    const newReview = new Review({ productId, rating, comment });
    await newReview.save();
    res.status(201).json({ message: "success", data: newReview });
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { comment },
      { new: true }
    );
    res.json({ message: "Review updated successfully", data: updatedReview });
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    next(error);
  }
};
