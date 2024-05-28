import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./home.css";
import { BannerOne } from "./BannerOne.jsx";
import BannerTwo from "./BannerTwo.jsx";
import ServicePage from "./ServicePage.jsx";
import { FooterPage } from "./FooterPage";
import ProductCard from "./ProductCard.jsx";

// const products = [
//   {
//     _id: 1,
//     image: "../../../img/dog1.jpg",
//     name: "Dog",
//     price: 9.99,
//     category: "dogs",
//   },
//   {
//     _id: 2,
//     image: "../../../img/cat.jpg",
//     name: "Cat",
//     price: 19.99,
//     category: "cats",
//   },
//   {
//     _id: 3,
//     image: "../../../img/bird.jpg",
//     name: "Birds",
//     price: 29.99,
//     category: "birds",
//   },
//   {
//     _id: 4,
//     image: "../../../img/hamster.jpg",
//     name: "Rodents",
//     price: 10.99,
//     category: "rodents",
//   },
// ];

export const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/products/products/featured"
        );
        setFeaturedProducts(data.data);
        console.log("featured:", data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="home-home-discount">
          <h1 className="home-h01"> Discount on first purchase</h1>
          <span className="home-30"> 30%</span>
          <Link to="/discount" className="home-button">
            <button className="home-button"> Go to Catalog</button>
          </Link>
        </div>
      </div>

      <div className="menu-parent-container">
        <div className="menu-container">
          <BannerOne />
        </div>
      </div>
      <div className="main-product-container">
        <div className="product-background">
          <h1 className="product-h1">Best of this week</h1>
          <div className="product-child-container">
            <ul className="product-ul">
              <li className="product-li">
                <Link
                  to="/products/category/dogs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  For Dogs
                </Link>
              </li>
              <li className="product-li">
                {" "}
                <Link
                  to="/products/category/cats"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  For Cats
                </Link>
              </li>
              <li className="product-li">
                <Link
                  to="/products/category/birds"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  For the Birds
                </Link>
              </li>
              <li className="product-li">
                <Link
                  to="/products/category/rodents"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  For Rodents
                </Link>
              </li>
            </ul>

            <div className="product-card">
              <div className="product-text-container">
                {featuredProducts.length > 0 ? (
                  featuredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                ) : (
                  <div>No products</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-parent-container">
        <div className="banner-container">
          <BannerTwo />
        </div>
      </div>
      <div className="service-parent-container">
        <ServicePage />
      </div>
      <div className="footer-parent-container">
        <FooterPage />
      </div>
    </>
  );
};
