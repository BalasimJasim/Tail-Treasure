/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// export default Register;
import React from "react";
import "./register.css";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="register-container" id="register">
          <div className="top">
            <h1>Welcome to Tail Treasure </h1>
            <header>
              Create an account or
              <NavLink
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#800080",
                  marginLeft: "10px",
                }}
              >
                Login
              </NavLink>{" "}
            </header>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Firstname"
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Lastname"
              />
            </div>

            <div className="input-box">
              <input type="text" className="input-field" placeholder="Email" />
            </div>

            <div className="input-box">
              <input type="text" className="input-field" placeholder="Region" />
            </div>

            <div className="input-box">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                className="input-field"
                placeholder="Repeat Password"
                required
              />
            </div>

            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check">
                  <p>
                    I don't want to receive promotional emails from Tail
                    Treasure
                  </p>
                </label>
              </div>
              <div className="two">
                <p>
                  By Clicking the "Register" button , you are creating a Tail
                  Treasure account, and you are agree to Tail Treasure's
                  <label>
                    <Link to="/terms">Terms & conditions </Link>
                  </label>
                </p>
              </div>
            </div>
          </form>

          <div className="input-box">
            <input type="submit" className="submit" value="Register" />
          </div>
        </div>

        <div className="image-box">
          <img src="../../../images/backgound.png" alt="background" />
        </div>
      </div>
    </div>
  );
}

export default Register;
