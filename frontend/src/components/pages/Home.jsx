import React from "react";
import { Link } from "react-router-dom";
import Register from "./forms/Register.jsx";
import "./home.css";
import { BannerOne } from "./BannerOne.jsx";
import BannerTwo from "./BannerTwo.jsx";
import ServicePage from "./ServicePage.jsx";
import { FooterPage } from "./FooterPage";
import { Product } from "./Product/Product.jsx";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1 className="home-h01">Food and Accessories for Your Beloved Pet</h1>

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

        <Link to="/discount" className="home-button">
          <button className="home-button"> 30% Discount</button>
        </Link>
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
