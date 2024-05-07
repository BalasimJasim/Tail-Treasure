import React from "react";
import { createContext, useReducer } from "react";
import { productReducer } from "../../../reducer/productReducer";

export const CartContext = createContext();
const initialState = [];

export const CartProvider = ({ children }) => {
  const [productState, dispatchProduct] = useReducer(
    productReducer,
    initialState
  );

  const addProduct = (product) => {
    dispatchProduct({ type: "ADD", payload: product });
  };

  const removeProduct = (id) => {
    dispatchProduct({ type: "REMOVE", payload: id });
  };
  return (
    <CartContext.Provider value={{ productState, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
