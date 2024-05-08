import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="product-container">
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
    </div>
  );
};

export default ProductCard;
