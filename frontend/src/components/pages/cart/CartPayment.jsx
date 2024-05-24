import React, { useState } from "react";
import { Steps } from "./constants.js";
import "./cartPayment.scss";

function CartPayment({ goTo, paymentMethod, setPaymentMethod }) {
  // const [paymentMethod, setPaymentMethod] = useState("creditCard"); // Default to credit card

  const onPaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const onPaymentSubmission = (event) => {
    event.preventDefault();
    // Here you might handle payment processing or similar
    // onPaymentComplete(); // Callback to indicate payment is complete
    goTo(Steps.fourth);
  };
  const goBack = () => {
    goTo(Steps.third);
  };

  return (
    <div className="card ">
      <div className="m-auto">
        <h2 className="text-center my-2">Choose Payment Method</h2>
        <div
          className="d-flex justify-content-around m-auto"
          onChange={onPaymentMethodChange}
        >
          <input
            type="radio"
            value="creditCard"
            name="paymentMethod"
            defaultChecked
          />{" "}
          Credit/Debit Card
          <input type="radio" value="paypal" name="paymentMethod" /> PayPal
        </div>

        {paymentMethod === "creditCard" ? (
          <div>
            <img
              className="visa"
              src="https://financialit.net/sites/default/files/visa-mastercard-amex_0.png"
              alt=""
            />
            <form onSubmit={onPaymentSubmission}>
              <p>Card Holder*</p>
              <input type="text" name="cardHolder" required />
              <p>Card Number*</p>
              <input
                type="text"
                name="cardNumber"
                required
                placeholder="Enter card number"
              />
              <p>Expiry Date*</p>
              <input
                type="text"
                name="expiryDate"
                required
                placeholder="MM/YY"
              />
              <p>Security Code*</p>
              <input type="text" name="cvv" required placeholder="CVV" />
              {/* <button type="submit">Pay</button> */}
            </form>
            <p>*mandatory field</p>
          </div>
        ) : (
          <div>
            <img
              className="paypal my-4 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
              alt=""
            />
            <form className="paypal-form m-auto" action="">
              <p className="my-3">Log In To PayPal</p>
              <input
                className="paypal-input"
                type="text"
                name=""
                id=""
                placeholder="Email address"
              />
              <input
                className="paypal-input"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
              <button className="paypal-btn">Log In</button>
            </form>
            {/* <button onClick={onPaymentSubmission}>Pay with PayPal</button> */}
          </div>
        )}
      </div>
      {/* <button onClick={onBack}>Back to Delivery</button> */}
      <div className="d-flex">
        <button className="btn-action back-btn" onClick={goBack}>
          Back
        </button>
        <button className="btn-action next-btn" onClick={onPaymentSubmission}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

export default CartPayment;
