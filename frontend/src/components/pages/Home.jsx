import React from "react";
import { Link } from "react-router-dom";

import "./home.css";
import { BannerOne } from "./BannerOne.jsx";
import BannerTwo from "./BannerTwo.jsx";
import ServicePage from "./ServicePage.jsx";
import { FooterPage } from "./FooterPage";
import ProductCard from "./ProductCard.jsx";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
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

      <div className="product-background">
        <h1 className="product-h1">Best of this week</h1>
        <div className="product-child-container">
          <ul className="product-ul">
            <li className="product-li">
              <Link to="/products/category/dogs">For Dogs</Link>
            </li>
            <li className="product-li">
              {" "}
              <Link to="/products/category/cats">For Cats</Link>
            </li>
            <li className="product-li">
              <Link to="/products/category/birds">For the Birds</Link>
            </li>
            <li className="product-li">
              <Link to="/products/category/rodents">For Rodents</Link>
            </li>
          </ul>

          <div className="product-card">
            <div className="product-text-container"></div>
            {product.length > 0 ? (
              product.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div>No Products</div>
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
