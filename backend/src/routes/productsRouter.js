import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  getProductsByCategory,
  updateProduct,
} from "../controller/productsController.js";
import { verifyTokenAndAdmin } from "../middlewares/veryfyToken.js";
import { updateCategoryCtrl } from "../controller/categoryCtr.js";

const productsRouter = Router();

productsRouter.route("/products").get(getAllProducts);

productsRouter.route("/products/category").get(getProductsByCategory);

productsRouter.route("/products").post(verifyTokenAndAdmin, addProduct);

productsRouter.route("/:productId").get(getProduct);

productsRouter.route("/:productId").put(verifyTokenAndAdmin, updateProduct);

productsRouter.route("/:productId").delete(verifyTokenAndAdmin, deleteProduct);

///products?category=categoryName >> query

// productsRouter.route("/products").get(getProductsByCategory);

export default productsRouter;

//!     add the Admin ctrl fro post,put and delete
