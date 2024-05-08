/* eslint-disable no-unused-vars */
import React from "react";

import {
  FaShoppingCart,
  FaHeart,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./routes/Navbar.css";
import { motion } from "framer-motion";
import { useUserContext } from "./contexts/UserContext";
import { useState, useEffect } from "react";
import Cart from "./pages/cart/Cart";

function Navbar() {
  const { state, dispatch } = useUserContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [framerMotion, setFramerMotion] = useState(false);

  useEffect(() => {
    if (!framerMotion) {
      setFramerMotion(true);
    }
    setTimeout(() => {}, 3000);
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const authButton = () => {
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    };
    if (state.isAccountVerified) {
      return (
        <>
          <li className="nav-item">
            <button className="nav-button" onClick={handleLogout}>
              <span className="nav-span">Logout</span>
            </button>
          </li>

          <li>
            <Link to="/products">
              {" "}
              <span>Product</span>
            </Link>
          </li>
          <li>
            {" "}
            <button onClick={handleLogout}>
              <span>Logout</span>
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            {" "}
            <Link to="/login">
              <button className="nav-button">
                <FaSignInAlt
                  className="mr-1"
                  style={{ color: "red", fontSize: "1.2em" }}
                />
                <span className="nav-span">Login</span>
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register">
              <button className="nav-button">
                <FaUserPlus
                  className="mr-1"
                  style={{ color: "red", fontSize: "1.2em" }}
                />
                <span className="nav-span"> Register</span>
              </button>
            </Link>
          </li>
        </>
      );
    }
  };
  return (
    <nav className="container-navbar">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="navbar-h1"
      >
        Tail-Treasure
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ fontSize: "" }}
      >
        <ul className="nav-ul">
          <li className="nav-item">
            <Link to="/dashboard">
              <button className="nav-button">
                <span className="nav-span">Home</span>
              </button>
            </Link>
          </li>
          {authButton()}
          <li className="nav-item" onClick={toggleCart}>
            <Link to="/cart">
              <FaShoppingCart size={30} />
            </Link>
          </li>
          <li className="nav-item">
            <FaHeart size={30} />
          </li>
        </ul>
      </motion.div>
      {/* {isCartOpen && <Cart />} */}
    </nav>
  );
}

export default Navbar;
