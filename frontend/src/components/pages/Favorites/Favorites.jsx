import React, { useEffect, useState } from "react";
import axios from "axios";
import "./favorites.scss";
import { BsHeartbreak } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdHeartBroken } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const Favorites = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [isREmoved, setIsRemoved] = useState(false);
  const [showGoUp, setShowGoUp] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    fetchFavoriteProducts(favoriteIds);
  }, [isREmoved]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoUp(true);
      } else {
        setShowGoUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const fetchFavoriteProducts = async (favoriteIds) => {
    console.log(favoriteIds);
    try {
      const requests = favoriteIds.map((id) =>
        axios.get(`http://localhost:5000/products/${id}`)
      );
      const responses = await Promise.all(requests);
      const favoriteProducts = responses.map((res) => res.data.data);
      console.log(favoriteProducts);
      setProducts(favoriteProducts);
      const initialQuantities = {};
      favoriteProducts.forEach((product) => {
        initialQuantities[product.id] = 1; // Initialize with a quantity of 1 for each product
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.error("Failed to fetch favorite products", error);
    }
  };

  // const incrementQuantity = (id) => {
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [id]: prevQuantities[id] + 1, // Increment only the quantity of the clicked product
  //   }));
  // };

  // const decrementQuantity = (id) => {
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1, // Decrement, ensuring quantity does not fall below 1
  //   }));
  // };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex((item) => item._id === product._id);
    const isProductInCart = productIndex !== -1;

    if (!isProductInCart) {
      const newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
      // cart[productIndex].quantity += quantities[product._id]; // Use the adjusted quantity for the cart
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const removeFromFavorites = (productId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = favorites.filter((id) => id !== productId);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsRemoved(!isREmoved);
    console.log(productId);
    console.log(favorites);
    console.log(newFavorites);
  };

  return (
    <div className="favorites-container">
      <div className="line">
        <a href="#" className={`go-up ${showGoUp ? "visible" : ""}`}>
          <FaArrowUp className="up-arrow" />
        </a>
      </div>
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="product-card card d-flex flex-row  "
          >
            <p className="m-3 p-3 img-cont">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </p>

            <div className="product-details">
              {showMessage && (
                <div className="alert alert-success mt-2" role="alert">
                  Added to cart!
                </div>
              )}
              <h4 className="m-3">{product.name}</h4>

              <p className="m-3">Price: {product.price}€</p>
              {/* <div className="quantity-controls">
                <button onClick={() => decrementQuantity(product.id)}>-</button>
                <span> {quantities[product.id]} </span>
                <button onClick={() => incrementQuantity(product.id)}>+</button>
              </div> */}
              <p className="d-flex justify-content-between m-3">
                <button onClick={() => removeFromFavorites(product._id)}>
                  Remove
                </button>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="card empty-favorite">
          <p>
            <MdHeartBroken className="brocken-heart" />
            {/* <BsHeartbreak className="brocken-heart" /> */}
          </p>
          <p>No favorites added yet!</p>
          <button className="back-to-prod">
            <Link to="/products">Go to Products</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
