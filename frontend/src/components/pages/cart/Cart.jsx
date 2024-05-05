/* eslint-disable no-unused-vars */
import "./cart.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { productState, removeProduct } = useContext(CartContext);

  return productState.length < 1 ? (
    <div className="empty-cart">
      <h1>Your shopping cart is empty</h1>
      <p>No items found</p>
      <Link className="empty-cart-link" to="/products">
        Go to Products Page
      </Link>
    </div>
  ) : (
    <>
      <section className="cart">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-wrapper">
          <div className="cart-items">
            {productState.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img-wrapper">
                  <img
                    className="cart-item-img"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-quantity">
                    Quantity:
                    <span>{item.amount}</span>
                  </div>
                  <div className="cart-item-price">
                    Price:
                    <span>{(item.price * item.amount).toFixed(2)}$ </span>
                  </div>
                  <i
                    onClick={() => removeProduct(item.id)}
                    className="bi bi-trash fill cart-item-delete-icon"
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-text">
              <i className="bi bi-check-circle-fill"></i>
              Some of your order qualifies for free shipping. Select this option
              at checkout.
            </div>
            <div className="cart-summary-total">
              Total:
              <span>
                {productState
                  .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
                  .toFixed(2)}
                $
              </span>
            </div>
            <button className="cart-summary-btn">Proceed to Checkout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
