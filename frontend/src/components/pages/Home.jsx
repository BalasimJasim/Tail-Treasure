import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./home.css";
import { BannerOne } from "./BannerOne.jsx";
import BannerTwo from "./BannerTwo.jsx";
import ServicePage from "./ServicePage.jsx";
import { FooterPage } from "./FooterPage";
import Slider from "./Slider.jsx";

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
            {featuredProducts.length > 0 ? (
              <Slider items={featuredProducts} />
            ) : (
              <div>No products</div>
            )}
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
