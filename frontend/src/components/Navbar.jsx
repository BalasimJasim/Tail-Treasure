/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./routes/Navbar.css";
import { motion } from "framer-motion";
import { useUserContext } from "./contexts/UserContext";

function Navbar() {
  const { state } = useUserContext();
  const { isAdmin, isAccountVerified } = state;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container-navbar">
      <div>
        <img className="logo" src="/images/logo.jpg" alt="Tail-Treasure Logo" />
        <h1 className="navbar-h1">Tail-Treasure</h1>
      </div>
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0 }}
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
          {isAccountVerified ? (
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <Link to="/profile">
                <FaRegUser size={20} className="nav-icon" />
              </Link>
            </li>
          ) : (
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <Link to="/login">
                <button className="nav-button">
                  <span className="nav-span">Login</span>
                </button>
              </Link>
            </li>
          )}
          {isAdmin && (
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <Link to="/admin-dashboard">
                <button className="nav-button">
                  <span className="nav-span">Admin</span>
                </button>
              </Link>
            </li>
          )}
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <Link to="/cart">
              <FiShoppingCart size={20} className="nav-icon" />
            </Link>
          </li>
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <Link to="/products/:userId/favorites">
              <LuHeart size={20} className="nav-icon" />
            </Link>
          </li>
        </ul>
      </motion.div>
      <div className="burger-icon" onClick={toggleMobileMenu}>
        <div className={`bar ${showMenu ? "animation1" : ""}`}></div>
        <div className={`bar ${showMenu ? "animation2" : ""}`}></div>
        <div className={`bar ${showMenu ? "animation3" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
