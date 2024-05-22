import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import "./productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <Link key={product._id} to={`/products/${product._id}`}>
        <div
          className="card m-4"
          style={{ width: "280px", flexDirection: "rows" }}
        >
          <p className="d-flex justify-content-end m-1">
            <FiHeart className="favorite" fontSize={"1.5rem"} />
          </p>
          <img
            src={product.image}
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={{ textDecoration: "none" }}>
            <h5
              className="card-title"
              style={{ textDecoration: "none", listStyle: "none" }}
            >
              {product.name}
            </h5>
            <p
              className="card-text"
              style={{ textAlign: "right", textDecoration: "none" }}
            >
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
    </div>
  );
};

export default ProductCard;
