import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productPage.scss";
import { FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { IoPawOutline } from "react-icons/io5";

const ProductPage = () => {
  let { productID } = useParams();
  // const productId = match.params.productId;
  // const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        // "http://localhost:5000/products/66278214b4daa788fb4e131a"
        `http://localhost:5000/products/${productID}`
      );
      console.log(data);
      setProduct(data.data);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  const clickHandler = async () => {
    console.log(inputValue.current.value);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: inputValue.current.value }),
    };
    const request = await fetch("http://localhost:5000/reviews", config);
    const result = await request.json();

    setReview([...review, result]);
  };
  return (
    <div className="prod-container">
      {product ? (
        <div>
          <div className="d-flex">
            <div className="d-flex">
              <p className=" d-flex justify-content-end m-1">
                <FiHeart className="favorite" fontSize={"1.5rem"} />
              </p>
              <img src={product.image} className="d-block" />
            </div>
            <div className="prod-text">
              <h1> {product.name}</h1>
              <p>Price: {product.price}</p>

              <div className=" d-flex justify-content-between">
                <div className="cont-quant d-flex">
                  <button
                    className="p-2 quantity"
                    style={{
                      height: "40px",
                      backgroundColor: " rgb(245, 185, 73)",
                      fontSize: "1.5rem",
                    }}
                  >
                    -
                  </button>
                  <p className="quantity p-2 ">1</p>
                  <button
                    className="p-2 quantity"
                    style={{
                      height: "40px",
                      backgroundColor: " rgb(245, 185, 73)",
                      fontSize: "1.5rem",
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  style={{ fontSize: "1.4rem" }}
                  className=" px-5 py-0 cart-btn"
                  // style={{
                  //   backgroundColor: " rgb(245, 185, 73)",
                  //   fontSize: "1.3rem",
                  //   width: "20rem",
                  //   marginLeft: "0",
                  //   position: "absolute",
                  //   right: "0",
                  //   opacity: "0",
                  // }}
                >
                  <FaCartPlus /> ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <p>Description: {product.description}</p>
            <div>
              <h3>Review</h3>
              <div>
                <IoPawOutline />
                <IoPawOutline />
                <IoPawOutline />
                <IoPawOutline />
                <IoPawOutline />{" "}
              </div>
              <div>
                <textarea name="" id="" cols="60" rows="5"></textarea>
                <button> submit</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
