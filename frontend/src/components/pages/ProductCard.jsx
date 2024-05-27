import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import "./productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <Link key={product._id} to={`/products/${product._id}`}>
        <div className="card m-2">
          <p className="d-flex justify-content-end m-1">
            <FiHeart className="favorite" fontSize={"1.5rem"} />
          </p>
          <div className="img-container">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Price: {product.price}€</p>
            <div className="cart-btn">
              <button className="px-2 cart-btn">
                <FaCartPlus /> Click Here
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
