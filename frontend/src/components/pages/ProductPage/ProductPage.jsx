import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./productPage.scss";
import { FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { IoPawOutline } from "react-icons/io5";
import { CartContext } from "../../contexts/CartContext";
import { useUserContext } from "../../contexts/UserContext";

const ProductPage = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  // const [user, setUser] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addProduct, removeProduct } = useContext(CartContext);
  const { state: userState } = useUserContext();
  const addProductHandler = (product) => addProduct(product);
  const removeProductHandler = () => removeProduct(productID);
  const [isFavorite, setIsFavorite] = useState(false);

  const user = {
    firstName: userState.user.firstName,
    lastName: userState.user.lastName,
  };
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(productID));
    getProduct();
    getReviews();
    // getTheUser();
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        // "http://localhost:5000/products/66278214b4daa788fb4e131a"
        `http://localhost:5000/products/${productID}`
      );
      console.log(data);
      setProduct(data.data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };
  const getReviews = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/reviews/product/${productID}`
      );
      setReviews(data.data);
    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };

  const addReviewHandler = async () => {
    try {
      await axios.post(`http://localhost:5000/reviews/product`, {
        comment: reviewInput,
        productId: productID,
        userId: userState.user.id,
      });
      // Refresh reviews after adding a new one
      getReviews();
      // Clear the review input field
      setReviewInput("");
    } catch (error) {
      console.log("Error adding review:", error);
    }
  };
  // const getTheUser = async () => {
  //   try {
  //     const userId = userState.user.id;
  //     const { data } = await axios.get(`http://localhost:5000/users/${userId}`);
  //     console.log(data);
  //     setUser({
  //       firstName: userState.user.firstName,
  //       lastName: userState.user.lastName,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // // console.log(user);
  // console.log(user.firstName);
  // console.log(user.lastName);
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const filteredFavorites = favorites.filter((id) => id !== productID);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      setIsFavorite(false);
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, productID])
      );
      setIsFavorite(true);
    }
  };
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const addProductToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (p) => p.id === product.id
      );
      let newCart;

      if (existingProductIndex >= 0) {
        newCart = [...prevCart];
        newCart[existingProductIndex] = {
          ...newCart[existingProductIndex],
          quantity: newCart[existingProductIndex].quantity + 1,
        };
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };
  // const addProductToCart = (product) => {
  //   const existingProduct = cart.find((p) => p.id === product.id);
  //   if (existingProduct) {
  //     const updatedCart = cart.map((p) =>
  //       p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
  //     );
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } else {
  //     const updatedCart = [...cart, { ...product, quantity: 1 }];
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   }
  // };
  return (
    <div className="prod-container">
      {product ? (
        <div>
          <div className="d-flex">
            <div className="d-flex">
              <p className=" d-flex justify-content-end m-1">
                <FiHeart
                  onClick={toggleFavorite}
                  className={`favorite ${isFavorite ? "active" : ""}`}
                  fontSize={"1.5rem"}
                />
              </p>
              <img src={product.image} className="d-block" />
            </div>
            <div className="prod-text">
              <h1> {product.name}</h1>
              <p>Price: {product.price}</p>

              <div className=" d-flex justify-content-between">
                <div className="cont-quant d-flex">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 quantity"
                    style={{
                      height: "40px",
                      backgroundColor: " rgb(245, 185, 73)",
                      fontSize: "1.5rem",
                    }}
                  >
                    -
                  </button>
                  <p className="quantity p-2 ">{quantity}</p>
                  <button
                    onClick={incrementQuantity}
                    className="p-2 quantity"
                    style={{
                      height: "40px",
                      backgroundColor: " rgb(245, 185, 73)",
                      fontSize: "1.5rem",
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addProductToCart(product)}
                  style={{ fontSize: "1.4rem" }}
                  className=" px-5 py-0 cart-btn"
                  // style={{
                  //   backgroundColor: " rgb(245, 185, 73)",
                  //   fontSize: "1.3rem",
                  //   width: "20rem",
                  //   marginLeft: "0",
                  //   position: "absolute",
                  //   right: "0",
                  //   opacity: "0",
                  // }}
                >
                  <FaCartPlus /> ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <p>Description: {product.description}</p>
            <div>
              <h3>Reviews</h3>
              <div>
                {userState.isAccountVerified ? (
                  <div>
                    <textarea
                      value={reviewInput}
                      onChange={(e) => setReviewInput(e.target.value)}
                      cols="60"
                      rows="5"
                    ></textarea>
                    <button onClick={addReviewHandler}>Submit</button>
                  </div>
                ) : (
                  <p>Please log in to add a review</p>
                )}
              </div>
              {reviews.length > 0 ? (
                <div>
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <h5>
                        {user.firstName} {user.lastName}
                      </h5>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No reviews yet</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;