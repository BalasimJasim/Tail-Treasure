// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import img from "../../../img/imgdog.jpg";

function Dashboard() {
  return (
    <div className="dog">
      <div className="content">
        <div className="dog-image" style={{ backgroundImage: `url(${img})` }}>
          <Link to="/Discount">
            <h2>Food & Accessories</h2>
            <button>30% Discount</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
