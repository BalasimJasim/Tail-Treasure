import express from "express";
import {
  createCategoryCtrl,
  getAllCategoriesCtrl,
  deleteCategoryCtrl,
} from "../controller/categoryCtr.js";
import { verifyTokenAndAdmin } from "../middlewares/veryfyToken.js";
import { validateCategory } from "../middlewares/categoryValidation.js";

const categoryRoute = express.Router();

//                                                                Route for creating a new category=> Amin

categoryRoute.post(
  "/",
  verifyTokenAndAdmin,
  validateCategory,
  createCategoryCtrl
);

//                                                                Route for getting all categorie=> everyone
categoryRoute.get("/", getAllCategoriesCtrl);

//                                                                 Route for deleting a category by ID => Admin
categoryRoute.delete("/:id", verifyTokenAndAdmin, deleteCategoryCtrl);

export default categoryRoute;
