import { Product } from "../models/ProductModel";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json({
      message: "Success",
      length: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      const err = new Error("Product does not exist");
      err.status = 404;
      return next(err);
    }

    res.json({
      message: "Success",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  const { body } = req;
  try {
    const product = await Product.create(body);
    res.status(201).json({ message: "Success", data: product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedProduct) {
      const err = new Error("Product not found");
      err.status = 404;
      return next(err);
    }

    res.json({
      message: "Success",
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      const err = new Error("Product not found");
      err.status = 404;
      return next(err);
    }

    res.json({
      message: "Success",
      data: deletedProduct,
    });
  } catch (error) {
    next(error);
  }
};
