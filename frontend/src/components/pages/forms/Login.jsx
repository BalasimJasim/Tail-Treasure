/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import loginImage from "../../../../images/loginImage.jpg";
import { motion } from "framer-motion";
import { userLoginApi } from "../../../Helpers/fetches";
import { useUserContext } from "../../contexts/UserContext";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useUserContext();
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const loginObj = { email, password };
      const response = await userLoginApi(loginObj);

      const { data } = response;

      if (data.token) {
        console.log(data);
        Cookies.set("token", data.token);
        Cookies.set("user", email);

        dispatch({ type: "LOGIN", payload: { user: data.user } });
        console.log(navigate);
        navigate("/");
        setError("");
      }
    } catch (error) {
      setError("Invalid username or password");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  const handleLogout = async () => {
    try {
      await dispatch({ type: "LOGOUT" });
      navigate("login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="form-box-login">
          <div className="login-container" id="login">
            <div className="top-login">
              <span
                style={{
                  fontFamily: "Shadows Into Light",
                  fontSize: "25px",
                  color: "black",
                }}
              >
                Don't have an account?
                <Link to="/register">Sign up</Link>
              </span>
              <header>Login</header>
            </div>
            <form onSubmit={handleLogin}>
              <div className="input-box-login">
                <input
                  type="text"
                  className="input-field-login"
                  placeholder="Username or Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-box-login">
                <input
                  type="password"
                  className="input-field-login"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="input-box-login">
                <input type="submit" className="submit-login" value="Sign In" />
              </div>
              <div className="forgot-password-link">
                <Link to="/forgot">Forgot password?</Link>
              </div>
            </form>
            {error && <div className="error-login">{error}</div>}
            <div className="two-col-login">
              <div className="one-login">
                <input type="checkbox" id="login-check" />
                <label htmlFor="login-check">Remember Me</label>
              </div>
              {/* <div className="two-login">
                <button onClick={handleLogout}>Logout</button>
              </div> */}
              {
                <motion.div
                  initial={{ opacity: 0, y: "80vh" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="image-box-login"
                >
                  <img src={loginImage} alt="background" />
                </motion.div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
