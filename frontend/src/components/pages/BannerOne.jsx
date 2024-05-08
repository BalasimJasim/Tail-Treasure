import React from "react";
import "./bannerone.css";
import img from "../../../img/dog.jpg";
import img1 from "../../../img/hamster.jpg";

import img2 from "../../../img/bird.jpg";
import img3 from "../../../img/cat.jpg";

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
          <h3 className="dog"> For Dogs</h3>
        </div>

        <div
          className="photo"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="hamster">For Rodents</h3>
        </div>

        <div
          className="photo"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="bird">For the Birds</h3>
        </div>

        <div
          className="photo"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h3 className="cat">For Cats</h3>
        </div>
      </div>
    </div>
  );
};
