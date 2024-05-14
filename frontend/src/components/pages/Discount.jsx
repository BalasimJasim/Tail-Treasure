import React from "react";
import "./discount.css";
import { FaHeart } from "react-icons/fa";
import dogFood1 from "../../../discountimages/dogfood1.jpeg";
import dogFood2 from "../../../discountimages/dogfood2.jpeg";
import dogFood3 from "../../../discountimages/dogfood3.jpeg";
import dogFood4 from "../../../discountimages/dogfood4.jpeg";
import catFood1 from "../../../discountimages/catfood1.jpeg";
import catFood2 from "../../../discountimages/catfood2.jpeg";
import catFood3 from "../../../discountimages/catfood3.jpeg";
import catFood4 from "../../../discountimages/catfood4.jpeg";
import { FooterPage } from "./FooterPage.jsx";

const Discount = () => {
  return (
    <div className="main-container">
      <h2 className="discount-h2">
        Enjoy a 30% discount on a wide range of premium food and accessories,
        exclusively for new customers. Treat your furry friend to the best
        products while saving big! Hurry, grab your favorites now and pamper
        your pet with quality items at unbeatable prices!
      </h2>

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

              <h4 className="dog-price">price:$29.99</h4>
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

              <h4 className="dog-price">$25.65</h4>
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
                Pedigree PRO Expert Nutrition Small Adult Breed(9 Months
                Onwards) Dry Dog Food
              </p>

              <h4 className="dog-price">$19.99</h4>
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
            <img src={catFood1} alt="Dog Food 1" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 1</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={catFood2} alt="Dog Food 2" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 2</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={catFood3} alt="Dog Food 3" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 3</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={catFood4} alt="Dog Food 4" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 4</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1">Premium food for Birds</h1>

      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood1} alt="Dog Food 1" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 1</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood2} alt="Dog Food 2" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 2</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood3} alt="Dog Food 3" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 3</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood4} alt="Dog Food 4" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 4</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1">Premium food for Rodents</h1>

      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood1} alt="Dog Food 1" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 1</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood2} alt="Dog Food 2" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 2</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood3} alt="Dog Food 3" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 3</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood4} alt="Dog Food 4" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 4</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="discount-h1">Premium food for Accessories</h1>

      <div className="dog-container">
        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood1} alt="Dog Food 1" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 1</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood2} alt="Dog Food 2" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 2</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood3} alt="Dog Food 3" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 3</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="border-card">
          <div className="dog-image">
            <img src={dogFood4} alt="Dog Food 4" />
            <div className="dog-description">
              <h3 className="dog-name">Dog Food 4</h3>
              <p className="dog-price">$39.99</p>
              <button className="dog-buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default Discount;
