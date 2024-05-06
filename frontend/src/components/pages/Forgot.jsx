// eslint-disable-next-line no-unused-vars
import React from "react";
import "./forgot.css";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <>
      <div className="page">
        <div className="container-forgot">
          <h1 className="forgot-title">Forgot Password</h1>
          <div className="forgot-box">
            <input
              type="text"
              className="forgot-field"
              placeholder="Username"
            />

            <Link to="/reset" className="forgot-button">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
