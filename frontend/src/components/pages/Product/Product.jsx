// Product.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.scss";
import { ProductItem } from "./ProductItem";
import { useParams } from "react-router-dom";
import "./product.scss";
// import "../ProductPage/productPage.scss";
import { Audio, RotatingLines } from "react-loader-spinner";
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
    <>
      <div className="line">
        <div className="Product">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductItem product={product} key={product._id} />
            ))
          ) : (
            <>
              <div>
                {" "}
                render(
                <RotatingLines
                  visible={true}
                  height="96"
                  width="96"
                  color=" rgb(245, 185, 73) 2px;"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                ){/* <div className="line"> </div> */}
                <div>Loading</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
