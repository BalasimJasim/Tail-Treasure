import React from "react";
import "./discount.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dogFood1 from "../../../discountimages/dogfood1.jpeg";
import dogFood2 from "../../../discountimages/dogfood2.jpeg";
import dogFood3 from "../../../discountimages/dogfood3.jpeg";
import dogFood4 from "../../../discountimages/dogfood4.jpeg";
import catFood2 from "../../../discountimages/catfood2.jpeg";
import catFood3 from "../../../discountimages/catfood3.jpeg";
import catFood4 from "../../../discountimages/catfood4.jpeg";
import catfood5 from "../../../discountimages/catfood5.jpg";
import birdFood1 from "../../../discountimages/birdfood1.jpg";
import birdFood2 from "../../../discountimages/birdfood2.jpg";
import birdFood3 from "../../../discountimages/birdfood3.jpg";
import birdFood4 from "../../../discountimages/birdfood4.jpg";
import rodentsFood1 from "../../../discountimages/rodentsfood1.jpg";
import rodentsFood2 from "../../../discountimages/rodentsfood2.jpg";
import rodentsFood3 from "../../../discountimages/rodentsfood3.jpg";
import rodentsFood4 from "../../../discountimages/rodentsfood4.jpg";

import { FooterPage } from "./FooterPage.jsx";

const Discount = () => {
  const navigate = useNavigate();

  const handleNavigateToDiscount = () => {
    navigate("/discount");
  };

  return (
    <div className="main-container">
      <h2 className="discount-h2">Enjoy a 30% discount on first Purchase</h2>

      <h1 className="discount-h1">Premium food for Dogs</h1>
      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>
            <img src={dogFood1} alt="Dog Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Pedigree PRO Expert Nutrition Small Adult Breed(2-9Months)
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>
            <img src={dogFood2} alt="Dog Food 2" />
            <div className="dog-description-container">
              <p className="dog-description">
                Pedigree Meat & Milk Puppy Dry Puppy Food
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>
            <img src={dogFood3} alt="Dog Food 3" />
            <div className="dog-description-container">
              <p className="dog-description">
                Pedigree PRO Expert Nutrition Small Adult Breed Dry Dog Food
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>
            <img src={dogFood4} alt="Dog Food 2" />
            <div className="dog-description-container">
              <p className="dog-description">
                Pedigree PRO Expert Nutrition Active Adult Dry Dog Food
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1">Premium food for Cats</h1>

      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={catfood5} alt="Dog Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Specially developed dry food for adult British Shorthair Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={catFood2} alt="Dog Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                lps maintain muscle mass thanks to a high protein content
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={catFood3} alt="Dog Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Complete dry food for adult neutered Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={catFood4} alt="Dog Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1">Premium food for Birds</h1>

      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={birdFood1} alt="Bird Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={birdFood2} alt="Bird Food 2" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={birdFood3} alt="Bird Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={birdFood4} alt="Bird Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1">Premium food for Rodents</h1>

      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={rodentsFood1} alt="Rodents Food 1" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={rodentsFood2} alt="Rodents Food 2" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={rodentsFood3} alt="Rodents Food 3" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="border-card">
          <div className="dog-image">
            <h5 className="discount-h5"> Sale 30% off</h5>{" "}
            <img src={rodentsFood4} alt="Rodents Food 4" />
            <div className="dog-description-container">
              <p className="dog-description">
                Holistic dry food for adult indoor Cats
              </p>
              <h4 className="dog-price">
                price:$39.99 <span className="discounted-span">now $29,70</span>
              </h4>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <button className="dog-buy-button" onClick={handleNavigateToDiscount}>
        Go to Discount
      </button>

      <FooterPage />
    </div>
  );
};

export default Discount;
