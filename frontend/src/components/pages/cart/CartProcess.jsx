import React, { useState, useEffect } from "react";
// import CartDelivery from "./CartDelivery";
// import CartPayment from "./CartPayment";
import { Steps } from "./constants.js";
// import Stepper from "./Stepper.jsx";
import { Link } from "react-router-dom";

function CartProcess({
  cartItems,
  incrementQuantity,
  decrementQuantity,
  calculateTotal,
  finalTotal,
  goTo,
  isRemoved,
  setIsRemoved,
}) {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCartItems(storedCart);
  // }, []);

  // const updateCartInLocalStorage = (items) => {
  //   localStorage.setItem("cart", JSON.stringify(items));
  //   setCartItems(items);
  // };

  // const incrementQuantity = (id) => {
  //   const newCart = cartItems.map((item) => {
  //     console.log(id, item._id);
  //     return item._id === id ? { ...item, quantity: item.quantity + 1 } : item;
  //   });
  //   updateCartInLocalStorage(newCart);
  // };

  // const decrementQuantity = (id) => {
  //   const newCart = cartItems.map((item) => {
  //     return item._id === id
  //       ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
  //       : item;
  //   });
  //   updateCartInLocalStorage(newCart);
  // };

  // const calculateTotal = () => {
  //   return cartItems
  //     .reduce((total, item) => total + item.quantity * item.price, 0)
  //     .toFixed(2);
  // };
  const total = calculateTotal();

  const shippingCost = calculateTotal() > 39.99 ? 0 : 15;
  const shipping = total > 40 ? 0 : shippingCost;
  // const finalTotal = parseFloat(total) + parseFloat(shipping);
  // const shippingMessage =
  //   calculateTotal() > 40
  //     ? "Free Shipping: 0"
  //     : `Shipping Cost: ${shippingCost}`;
  if (cartItems.length === 0) {
    return (
      <div>
        Your cart is empty. <Link to="/products">Go to Products</Link>
      </div>
    );
  }

  const removeFromCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = cart.filter((item) => item._id !== productId);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setIsRemoved(!isRemoved);
  };
  // const [orderDetails, setOrderDetails] = useState({
  //   delivery: {},
  //   payment: {},
  //   items: [], // Assume cart items are stored here
  // });

  // const goToNextStep = () => {
  //   setStep(step + 1); // Move to next step
  // };
  // const goTo = (step, details = {}) => {
  //   // setOrderDetails((prev) => ({ ...prev, ...details }));
  //   setStep(step);
  // };
  // const goToPreviousStep = () => {
  //   setStep(step - 1); // Move back to previous step
  // };

  // const renderStep = () => {
  //   switch (step) {
  //     case Steps.first:
  //       return <Cart step={step} goTo={goTo} />;
  //     case Steps.second:
  //       return (
  //         <CartDelivery
  //           // onNext={(details) => goTo(Steps.third, { delivery: details })}
  //           goTo={goTo}
  //         />
  //       );
  //     case Steps.third:
  //       return (
  //         <CartPayment
  //           goTo={goTo}
  //           // onNext={(details) => goTo(Steps.fourth, { payment: details })}
  //         />
  //       );
  //     case Steps.fourth:
  //       return (
  //         <CartConfirm
  //           details={orderDetails}
  //           // onConfirm={() => goTo(Steps.fifth)}
  //           // onBack={() => goTo(Steps.third)}
  //         />
  //       );
  //     case Steps.fifth:
  //       return <CartPlacedOrder onNext={goTo} />;

  //     default:
  //       return <div>Unknown step</div>;
  //   }
  // };
  const nextStep = () => {
    goTo(Steps.second);
  };
  return (
    <>
      <div className="card">
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item d-flex flex-row">
            <p className="m-3 img-container">
              <img src={item.image} alt={item.name} className="product-image" />
            </p>

            <div className="w-75">
              <h4 className="m-3">{item.name}</h4>
              <p className="m-3">Price: ${item.price}</p>
              <div className="quantity-controls d-flex justify-content-between">
                <p>
                  <button
                    className="p-2 m-3"
                    onClick={() => decrementQuantity(item._id)}
                  >
                    -
                  </button>
                  <span> {item.quantity} </span>
                  <button
                    className="p-2 m-3"
                    onClick={() => incrementQuantity(item._id)}
                  >
                    +
                  </button>
                </p>

                <p className="rmv-cont">
                  <button
                    className="p-2 m-3 remove-btn"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="total-cart">
          <div className="d-flex justify-content-between mx-2">
            <p>Subtotal:</p> <p>{calculateTotal()}€</p>
          </div>
          <div className="d-flex justify-content-between mx-2">
            {total > 40 ? (
              <>
                <p>Free Shipping:</p> <p>0€</p>
              </>
            ) : (
              <>
                <p>Shipping Cost:</p> <p>{shipping}€</p>
              </>
            )}
          </div>
          <div className="total d-flex justify-content-between mx-2">
            <p>Total:</p> <p>{parseFloat(finalTotal).toFixed(2)}€</p>
          </div>
        </div>
        <button onClick={nextStep} className="checkout-btn ">
          Checkout
        </button>
      </div>
      {/* <div className="cart-container d-flex flex-column">
        <div className="processing-line d-flex justify-content-between">
          {Object.values(Steps).map((stepValue, index) => (
            <p
              key={index}
              className={`circle ${step === stepValue ? "circle-active" : ""}`}
            >
              {index + 1}
            </p>
          ))}
        </div>
        {renderStep()}
      </div> */}
      {/* <div className="cart-container d-flex flex-column">
        <Stepper step={step} />
        <div>{renderStep()}</div>
      </div> */}
    </>
  );
}

export default CartProcess;
