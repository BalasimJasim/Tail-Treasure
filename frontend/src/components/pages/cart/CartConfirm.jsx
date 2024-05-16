import React from "react";
import { Steps } from "./constants.js";

function CartConfirm({ goTo }) {
  // Assuming `details` includes cart items, delivery info, and payment method

  const onConfirm = () => {
    goTo(Steps.fifth);
  };

  return (
    <div className="cart-confirm">
      <h2>Order Summary</h2>
      <div>
        <h3>Delivery Details:</h3>
        {/* <p>First Name: {details.delivery.firstName}</p>
        <p>Last Name: {details.delivery.lastName}</p>
        <p>Address: {details.delivery.address}</p>
        <p>Postcode: {details.delivery.postcode}</p>
        <p>City: {details.delivery.city}</p> */}
      </div>
      <div>
        <h3>Payment Method:</h3>
        {/* <p>{details.payment.method}</p> */}
      </div>
      {/* <button onClick={onBack}>Back</button> */}
      <button onClick={onConfirm}>Place Order</button>
    </div>
  );
}

export default CartConfirm;
