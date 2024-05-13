import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./bannerone.css";
import img from "../../../img/dog.jpg";
import img1 from "../../../img/hamster.jpg";
import img2 from "../../../img/bird.jpg";
import img3 from "../../../img/cat.jpg";

export const BannerOne = () => {
  const [dogProducts, setDogProducts] = useState([]);
  const [rodentProducts, setRodentProducts] = useState([]);
  const [birdProducts, setBirdProducts] = useState([]);
  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async (category) => {
      try {
        const response = await axios.get(
          `/products/products/category?category=${category}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      }
    };

    const fetchData = async () => {
      setDogProducts(await fetchProductsByCategory("dogs"));
      setRodentProducts(await fetchProductsByCategory("rodents"));
      setBirdProducts(await fetchProductsByCategory("birds"));
      setCatProducts(await fetchProductsByCategory("cats"));
    };

    fetchData();
  }, []);

  return (
    <div className="bannerone-background">
      <div className="container-grid">
        <div
          className="photo"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to="/products/dogs" className="dog-link">
            <h3 className="dog">For Dogs</h3>
            {dogProducts.map((product) => (
              <div key={product._id}>{product.name}</div>
            ))}
          </Link>
        </div>

        <div
          className="photo"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to="/products/rodents" className="rodent-link">
            <h3 className="hamster">For Rodents</h3>
            {rodentProducts.map((product) => (
              <div key={product._id}>{product.name}</div>
            ))}
          </Link>
        </div>

        <div
          className="photo"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to="/products/birds" className="bird-link">
            <h3 className="bird">For the Birds</h3>
            {birdProducts.map((product) => (
              <div key={product._id}>{product.name}</div>
            ))}
          </Link>
        </div>

        <div
          className="photo"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link to="/products/cats" className="cat-link">
            <h3 className="cat">For Cats</h3>
            {catProducts.map((product) => (
              <div key={product._id}>{product.name}</div>
            ))}
          </Link>
        </div>
      </div>
    </div>
  );
};
