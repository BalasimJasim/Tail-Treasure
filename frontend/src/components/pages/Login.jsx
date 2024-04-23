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
      // Failed login
      setError("Invalid username/email or password.");
    }
  };

  return (
    <>
      <div className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <span>
              Don't have an account? <Link to="/register">Sign up</Link>
            </span>
            <header>Login</header>
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Username or Email"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input type="submit" className="submit" value="Sign In" />
            </div>
          </form>
          {error && <div className="error">{error}</div>}
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check">Remember Me</label>
            </div>
            {/* <div className="two">
              <Link to="/forgot-password">Forgot password?</Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
