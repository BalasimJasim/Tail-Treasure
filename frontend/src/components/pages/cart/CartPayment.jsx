import React, { useState } from "react";
import { Steps } from "./constants.js";

function CartPayment({ goTo }) {
  const [paymentMethod, setPaymentMethod] = useState("creditCard"); // Default to credit card

  const onPaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const onPaymentSubmission = (event) => {
    event.preventDefault();
    // Here you might handle payment processing or similar
    // onPaymentComplete(); // Callback to indicate payment is complete
    goTo(Steps.fourth);
  };

  return (
    <div>
      <h2>Choose Payment Method</h2>
      <div onChange={onPaymentMethodChange}>
        <input
          type="radio"
          value="creditCard"
          name="paymentMethod"
          defaultChecked
        />{" "}
        Credit Card
        <input type="radio" value="paypal" name="paymentMethod" /> PayPal
      </div>

      {paymentMethod === "creditCard" ? (
        <form onSubmit={onPaymentSubmission}>
          <p>Card Number</p>
          <input type="text" name="cardNumber" required />
          <p>Expiry Date</p>
          <input type="text" name="expiryDate" required />
          <p>CVV</p>
          <input type="text" name="cvv" required />
          <button type="submit">Pay</button>
        </form>
      ) : (
        <div>
          <button onClick={onPaymentSubmission}>Pay with PayPal</button>
        </div>
      )}
      {/* <button onClick={onBack}>Back to Delivery</button> */}
      <button onClick={onPaymentSubmission}>Confirm Payment</button>
    </div>
  );
}

export default CartPayment;
