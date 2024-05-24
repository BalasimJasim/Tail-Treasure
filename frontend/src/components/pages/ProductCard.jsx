import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import "./productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
      <Link key={product._id} to={`/products/${product._id}`}>
        <div className="card1 m-2">
          <p className="d-flex justify-content-end m-1">
            <FiHeart className="favorite1" fontSize={"1.5rem"} />
          </p>
          <div className="img-container">
            <img
              src={product.image}
              className="card-img-top1"
              alt={product.name}
            />
          </div>
          <div className="card-body1">
            <h5 className="card-title1">{product.name}</h5>
            <p className="card-text1">Price: {product.price}€</p>
            <div className="cart-btn1">
              <button className="px-2 cart-btn1">
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
