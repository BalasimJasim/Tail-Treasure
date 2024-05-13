import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCartInLocalStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };

  const incrementQuantity = (id) => {
    const newCart = cartItems.map((item) => {
      console.log(id, item._id);
      return item._id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });
    updateCartInLocalStorage(newCart);
  };

  const decrementQuantity = (id) => {
    const newCart = cartItems.map((item) => {
      return item._id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item;
    });
    updateCartInLocalStorage(newCart);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div>
        Your cart is empty. <Link to="/products">Go to Products</Link>
      </div>
    );
  }
  console.log({ cartItems });

  const removeFromCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = cart.filter((item) => item._id !== productId);

    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <div className="cart-container d-flex flex-column">
      {cartItems.map((item) => (
        <div key={item._id} className="card cart-item d-flex flex-row">
          <p className="m-3 img-container">
            <img src={item.image} alt={item.name} className="product-image" />
          </p>

          <div>
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
      <div className="total">Total: ${calculateTotal()}</div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;

// /* eslint-disable no-unused-vars */
// import "./cart.css";
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../contexts/CartContext";

// const Cart = () => {
//   const { productState, removeProduct } = useContext(CartContext);

//   return productState.length < 1 ? (
//     <div className="empty-cart">
//       <h1>Your shopping cart is empty</h1>
//       <p>No items found</p>
//       <Link className="empty-cart-link" to="/products">
//         Go to Products Page
//       </Link>
//     </div>
//   ) : (
//     <>
//       <section className="cart">
//         <h1 className="cart-title">Shopping Cart</h1>
//         <div className="cart-wrapper">
//           <div className="cart-items">
//             {productState.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <div className="cart-item-img-wrapper">
//                   <img
//                     className="cart-item-img"
//                     src={item.image}
//                     alt={item.title}
//                   />
//                 </div>
//                 <div className="cart-item-info">
//                   <div className="cart-item-title">{item.title}</div>
//                   <div className="cart-item-quantity">
//                     Quantity:
//                     <span>{item.amount}</span>
//                   </div>
//                   <div className="cart-item-price">
//                     Price:
//                     <span>{(item.price * item.amount).toFixed(2)}$ </span>
//                   </div>
//                   <i
//                     onClick={() => removeProduct(item.id)}
//                     className="bi bi-trash fill cart-item-delete-icon"
//                   ></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <div className="cart-summary-text">
//               <i className="bi bi-check-circle-fill"></i>
//               Some of your order qualifies for free shipping. Select this option
//               at checkout.
//             </div>
//             <div className="cart-summary-total">
//               Total:
//               <span>
//                 {productState
//                   .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
//                   .toFixed(2)}
//                 $
//               </span>
//             </div>
//             <button className="cart-summary-btn">Proceed to Checkout</button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cart;
