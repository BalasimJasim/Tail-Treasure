import React, { useContext } from "react";
import { Steps } from "./constants.js";
import { useUserContext } from "../../contexts/UserContext.jsx";
import { makePurchase } from "../../../Helpers/fetches.js";
import "./cartConfirm.scss";

function CartConfirm({ goTo, formData, cartItems, finalTotal, paymentMethod }) {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCartItems(storedCart);
  // }, []);
  const { state, dispatch } = useUserContext();
  const { user } = state;
  console.log("User from context:", user);

  const onConfirm = async () => {
    console.log("User before onConfirm:", user);
    if (!user || !user.id) {
      console.error("User ID is missing or invalid");
      return;
    }
    const orderDetails = {
      userId: user.id,
      productId: cartItems[0]._id,
      quantity: cartItems[0].quantity,
    };
    console.log("Order Details:", orderDetails);
    try {
      const result = await makePurchase(orderDetails);
      console.log("Order Details after purchase:", orderDetails);

      dispatch({ type: "UPDATE_HISTORY", payload: result.history });
      goTo(Steps.fifth);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const goBack = () => {
    goTo(Steps.third);
  };

  return (
    <div className="cart-confirm card">
      <h2 className="text-center title-confirm">Order Summary</h2>
      <div className="order-cont">
        <div>
          <h3 className="conf-title">Products</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex flex-row">
              <p className="m-3 img-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
              </p>
              <div className="w-75">
                <h4 className="m-3">{item.name}</h4>
                <p className="m-3">Price: {item.price}€</p>{" "}
                <p className="m-3">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <p className="text-end total">Total: {finalTotal.toFixed(2)}€</p>
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
