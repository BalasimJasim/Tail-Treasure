/* eslint-disable no-unused-vars */
import React from "react";

import {
  FaShoppingCart,
  FaHeart,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./routes/Navbar.css";
import { motion } from "framer-motion";
import { useUserContext } from "./contexts/UserContext";
import { useState, useEffect } from "react";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/Profile";

function Navbar() {
  const { state, dispatch } = useUserContext();
  const { isAdmin, isAccountVerified } = state;

  // const { state, dispatch } = useUserContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [framerMotion, setFramerMotion] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (!framerMotion) {
      setFramerMotion(true);
    }
    setTimeout(() => {}, 3000);
  }, []);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  const authButton = () => {
    if (isAccountVerified) {
      return (
        <li className="nav-item" onClick={() => setShowMenu(false)}>
          <button className="nav-button" onClick={handleLogout}>
            <span className="nav-span">Logout</span>
          </button>
        </li>
      );
    } else {
      return (
        <li className="nav-item" onClick={() => setShowMenu(false)}>
          {" "}
          <Link to="/login">
            <button className="nav-button">
              <span className="nav-span">Login</span>
            </button>
          </Link>
        </li>
      );
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");

    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className="container-navbar">
      <div>
        <img className="logo" src="../images/logo.jpg" alt="" />
        <h1 className="navbar-h1">Tail-Treasure</h1>
      </div>
      {/* <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="navbar-h1"
      >
        Tail-Treasure
      </motion.h1>*/}
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0 }}
        style={{ fontSize: "" }}
      >
        <ul className={`nav-ul ${showMenu ? "show" : ""}`}>
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <Link to="/">
              <button className="nav-button">
                <span className="nav-span">Home</span>
              </button>
            </Link>
          </li>
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <Link to="/products">
              <button className="nav-button">
                <span className="nav-span">Products</span>
              </button>
            </Link>
          </li>
          {authButton()}
          {isAdmin && (
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <button className="nav-button">
                <Link to="/admin-dashboard">
                  <span className="nav-span">Admin</span>
                </Link>
              </button>
            </li>
          )}
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <Link to="/cart">
              <FaShoppingCart size={20} className="nav-icon" />
              <span className="nav-name">Cart</span>
            </Link>
          </li>
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <Link to="/products/:userId/favorites">
              <FaHeart size={20} className="nav-icon" />
              <span className="nav-name">Favorites</span>
            </Link>
          </li>
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <Link to="/profile">
              <FaUser size={20} className="nav-icon" />
              <span className="nav-name">Profile</span>
            </Link>
          </li>
        </ul>
      </motion.div>
      <div className="burger-icon" onClick={toggleMobileMenu}>
        <div className={`bar ${showMenu ? "animation1" : ""}`}></div>
        <div className={`bar ${showMenu ? "animation2" : ""}`}></div>
        <div className={`bar ${showMenu ? "animation3" : ""}`}></div>
      </div>
      {/* {isCartOpen && <Cart />} */}
    </nav>
  );
}
export default Navbar;
