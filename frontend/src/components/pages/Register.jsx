// eslint-disable-next-line no-unused-vars
import React from "react";
import "./register.css";
import { NavLink, Link } from "react-router-dom";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="background">
      <div className="form-box">
        <div className="register-container" id="register">
          <div className="top">
            <span className="topHead">
              Have an account? <NavLink to="/login">Login</NavLink>
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="two-forms">
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
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Email" />
            </div>

            <div className="input-box">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
              />
            </div>

            <div className="input-box">
              <input type="submit" className="submit" value="Register" />
            </div>
            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check">Remember Me</label>
              </div>
              <div className="two">
                <label>
                  <Link to="/terms">Terms & conditions</Link>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
