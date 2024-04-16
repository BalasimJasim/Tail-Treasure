import { Router } from "express";

const favoritesRouter = Router();

favoritesRouter.route("/").get(getAllFavorites);

favoritesRouter("/add/:productId").post(addFavoriteProduct);
favoritesRouter("/remove/:productId").delete(removeFavorite);
