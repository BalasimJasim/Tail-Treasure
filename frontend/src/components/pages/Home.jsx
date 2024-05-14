/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

import Register from "./forms/Register.jsx";
import Discount from "./Discount.jsx";

import "./home.css";
import { BannerOne } from "./BannerOne.jsx";
import ProductCard from "./ProductCard.jsx";
import BannerTwo from "./BannerTwo.jsx";
import ServicePage from "./ServicePage.jsx";
import { FooterPage } from "./FooterPage";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);
  useNavigate();

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };
  const handleDiscount = () => {
    Navigate("/discount");
  };

  const products = [
    { _id: 1, image: "../../../img/dog1.jpg", name: "Dog", price: 39.99 },
    { _id: 2, image: "../../../img/cat.jpg", name: "Cat", price: 39.99 },
    { _id: 3, image: "../../../img/bird.jpg", name: "Birds", price: 39.99 },
    {
      _id: 4,
      image: "../../../img/hamster.jpg",
      name: "Rodents",
      price: 39.99,
    },
  ];

  return (
    <>
      <div className="home-container">
        <h1 className="home-h1">Food and Accessories for Your Beloved Pet</h1>

        <p className="home-p">
          Owning a pet means ensuring their well-being with nutritious food and
          essential accessories. Choose high-quality pet food tailored to your
          pet's needs, including specialized formulas for unique dietary
          requirements. Treats are more than rewards; they're a way to bond and
          reinforce positive behavior. Provide your pet with comfortable bedding
          for rest and relaxation, and keep them entertained and mentally
          stimulated with a variety of toys. Regular grooming promotes hygiene
          and prevents health issues. Ensure your pet's safety with proper
          identification and travel gear for adventures together. Selecting the
          right food and accessories enriches your pet's life and strengthens
          your bond. Prioritize quality, safety, and your pet's individual
          preferences for a happy and healthy companion.
        </p>
        <button
          type="button"
          className="home-button"
          onClick={togglePopover}
          ref={popoverRef}
        >
          30% Discount
        </button>

        {showPopover && (
          <div id="register" className="register-container-two">
            <span className="home-span">
              <Register />
            </span>
          </div>
        )}
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
            <li className="product-li">For Dogs</li>
            <li className="product-li">For Cats</li>
            <li className="product-li">For the Birds</li>
            <li className="product-li">For Rodents</li>
          </ul>

          <div className="product-card">
            <div className="product-text-container"></div>
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
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
