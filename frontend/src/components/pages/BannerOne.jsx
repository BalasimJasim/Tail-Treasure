import React from "react";
import "./bannerone.css";
import img from "../../../img/dog.jpg";
import img1 from "../../../img/hamster.jpg";
import img2 from "../../../img/bird.jpg";
import img3 from "../../../img/cat.jpg";
import { Link } from "react-router-dom";
export const BannerOne = () => {
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
          <h3 className="dog">
            <Link to="/products/category/dogs">For Dogs</Link>
          </h3>
        </div>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="hamster">
            <Link to="/products/category/rodents">For Rodents</Link>
          </h3>
        </div>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="bird">
            <Link to="/products/category/birds">For the Birds</Link>
          </h3>
        </div>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="cat">
            <Link to="/products/category/cats">For Cats</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
