// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./reset.css";
import { Link } from "react-router-dom";
const Reset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <div className="container-reset">
        <h1 className="reset-title">Reset Password</h1>
        <div className="reset-box">
          <input
            type="password"
            className="reset-field"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            className="reset-field"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <Link to="/login" className="reset-button">
            RESET PASSWORD
          </Link>
        </div>
      </div>
    </>
  );
};

export default Reset;
