import React, { useEffect, useState } from "react";
import axios from "axios";
import "./favorites.scss";

const Favorites = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    fetchFavoriteProducts(favoriteIds);
  }, []);

  const fetchFavoriteProducts = async (favoriteIds) => {
    try {
      const requests = favoriteIds.map((id) =>
        axios.get(`http://localhost:5000/products/${id}`)
      );
      const responses = await Promise.all(requests);
      const favoriteProducts = responses.map((res) => res.data.data);
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
    const isProductInFavorites = productIndex !== -1;

    if (!isProductInFavorites) {
      const newProduct = { ...product, quantity: quantities[product._id] };
      cart.push(newProduct);
      // cart[productIndex].quantity += quantities[product._id]; // Use the adjusted quantity for the cart
    }

    localStorage.setItem("favorites", JSON.stringify(cart));
  };
  const removeFromFavorites = (productId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = favorites.filter((item) => item._id !== productId);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    console.log(productId);
    console.log(favorites);
    console.log(newFavorites);
  };

  return (
    <div className="favorites-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-card card d-flex flex-row ">
            <p className="m-3 p-3 img-cont">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </p>

            <div className="product-details">
              <h4 className="m-3">{product.name}</h4>

              <p className="m-3">Price: {product.price}</p>
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
        <p>No favorites added yet!</p>
      )}
    </div>
  );
};

export default Favorites;
