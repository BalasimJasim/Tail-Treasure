// Product.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.scss";
import { ProductItem } from "./ProductItem";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getAllProductsByCategory();
    // getAllProducts();
  }, [category]);

  const getAllProductsByCategory = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/products/products/category?category=${category}`
      );

      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  // const getAllProducts = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "http://localhost:5000/products/products"
  //     );
  //     setProducts(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
