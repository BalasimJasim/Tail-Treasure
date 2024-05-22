import React, { useState, useEffect } from "react";
import { Steps } from "./constants.js";
import "./cartConfirm.scss";

function CartConfirm({ goTo, formData, cartItems, finalTotal, paymentMethod }) {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCartItems(storedCart);
  // }, []);

  const onConfirm = () => {
    goTo(Steps.fifth);
  };

  const goBack = () => {
    goTo(Steps.third);
  };

  return (
    <div className="cart-confirm card">
      <h2 className="text-center">Order Summary</h2>
      <div className="order-cont">
        <div>
          <h3 className="conf-title">Products</h3>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item d-flex flex-row">
              <p className="m-3 img-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
              </p>
              <div className="w-75">
                <h4 className="m-3">{item.name}</h4>
                <p className="m-3">Price: ${item.price}</p>{" "}
                <p className="m-3">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <p className="text-end total">Total: {finalTotal}€</p>
        </div>
        <div>
          <h3 className="conf-title">Delivery Details:</h3>
          <p className="info-field">
            {formData.firstName} {formData.lastName}
          </p>
          <p className="info-field">{formData.address}</p>
          <p className="info-field">{formData.postcode}</p>
          <p className="info-field">{formData.city}</p>
        </div>
        <div>
          <h3 className="conf-title">Payment Method:</h3>
          {/* <p>{details.payment.method}</p> */}
          <p className="info-field">{paymentMethod}</p>
        </div>
      </div>
      <div className="d-flex">
        <button className="btn-action back-btn" onClick={goBack}>
          Back
        </button>
        <button className="btn-action next-btn" onClick={onConfirm}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartConfirm;
