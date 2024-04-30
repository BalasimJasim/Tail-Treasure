import React from "react";
import img from "../../img/logo.png";
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

function Navbar() {
  return (
    <nav className="headerbox">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ fontSize: "4rem" }}
      >
        Tail-Treasure
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ fontSize: "" }}
      >
        <ul className="bar">
          {
            <>
              <li>
                <Link to="/dashboard">
                  <button>
                    <span>Home</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button>
                    <FaSignInAlt
                      className="mr-1"
                      style={{ color: "red", fontSize: "1.2em" }}
                    />
                    <span>Login</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button>
                    <FaUserPlus
                      className="mr-1"
                      style={{ color: "red", fontSize: "1.2em" }}
                    />
                    <span> Register</span>
                  </button>
                </Link>
              </li>
            </>
          }{" "}
          <li>
            <FaShoppingCart size={30} />
          </li>
          <li>
            <FaHeart size={30} />
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
