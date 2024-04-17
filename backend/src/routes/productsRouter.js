import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controller/productsController.js";

const productsRouter = Router();

productsRouter.route("/").get(getAllProducts).post(addProduct);

productsRouter
  .route("/:productId")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default productsRouter;
