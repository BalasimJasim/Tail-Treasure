// Product.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiHeart } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./product.scss";

export const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/products/products"
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Product">
      {product.length > 0 ? (
        product.map((product) => (
          <Link key={product._id} to={`/products/${product._id}`}>
            <div className="card m-4" style={{ width: "20rem" }}>
              <p className="d-flex justify-content-end m-1">
                <FiHeart className="favorite" fontSize={"1.5rem"} />
              </p>
              <img
                src={product.image}
                style={{ width: "250px", display: "block", margin: "auto" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text" style={{ textAlign: "right" }}>
                  Price: {product.price}€
                </p>
                <div className="cart-btn">
                  <button className="px-2 cart-btn">
                    <FaCartPlus /> ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div>No products</div>
      )}
    </div>
  );
};
