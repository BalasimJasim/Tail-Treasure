import { Router } from "express";

const favoritesRouter = Router();

favoritesRouter.route("/").get(getAllFavorites);

favoritesRouter.route("/add/:productId").post(addFavoriteProduct);
favoritesRouter.route("/remove/:productId").delete(removeFavorite);
