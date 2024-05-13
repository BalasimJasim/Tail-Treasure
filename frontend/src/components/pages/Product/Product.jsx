// Product.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.scss";
import { ProductItem } from "./ProductItem";

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/products/products"
      );
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log({ products });
  return (
    <div className="Product">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem product={product} key={product._id} />
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};
