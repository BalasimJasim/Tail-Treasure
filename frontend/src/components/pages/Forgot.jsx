/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { userForgotPassword } from "../../Helpers/fetches";
import "./forgot.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      const formData = { email };
      const response = await userForgotPassword(formData);
      if (
        response &&
        response.data &&
        response.data.userId &&
        response.data.token
      ) {
        const { userId, token } = response.data;
        Cookies.set("userId", userId);
        Cookies.set("token", token);
        setSuccessMessage("Password Reset link sent successfully!");
        setErrorMessage("");
      }
      navigate("/reset/:userId/reset/:token");
    } catch (error) {
      console.error("Error sending reset link:", error);
      setErrorMessage("Failed to send reset link: " + error.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="forgot-container">
      <h2 className="forgot-title">Forgot Password</h2>
      <div className="forgot-form">
        <input
          type="email"
          className="forgot-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="forgot-button" onClick={handleForgotPassword}>
          Send Reset Link
        </button>
        {errorMessage && <p className="forgot-error-message">{errorMessage}</p>}
        {successMessage && (
          <p className="forgot-success-message">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Forgot;
