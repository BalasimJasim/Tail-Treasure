/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (usernameOrEmail === "example" && password === "password") {
      // Successful login
      setError("");
    } else {
      setError("Username is incorrect or password");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="form-box-login">
          <div className="login-container" id="login">
            <div className="top-login">
              <span>
                Don't have an account? <Link to="/register">Sign up</Link>
              </span>
              <header>Login</header>
            </div>
            <form onSubmit={handleLogin}>
              <div className="input-box-login">
                <input
                  type="text"
                  className="input-field-login"
                  placeholder="Username or Email"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-box-login">
                <input
                  type="password"
                  className="input-field-login"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="input-box-login">
                <input type="submit" className="submit-login" value="Sign In" />
              </div>
            </form>
            {error && <div className="error-login">{error}</div>}
            <div className="two-col-login">
              <div className="one-login">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check">Remember Me</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
