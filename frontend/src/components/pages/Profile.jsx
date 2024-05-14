// export default Profile;
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./profile.css";

import av1 from "../../../images/av1.png";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle settings change
  function handleSettingsChange() {
    console.log("button is working");
    setIsEditing(!isEditing);
  }

  return (
    <div className="dash-container">
      <header className="dash-header">
        <h1>Profile</h1>
        <nav className="dash-sidebar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/CustomerSupportForm">Support</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="dash-content">
        <div className="profile-container">
          <div className="profile-info">
            <div className="profile-image">
              <img src={av1} alt="Profile" />
            </div>
            <div className="profile-details">
              <h2>Dr Balasim</h2>
              <p>User ID: 12345</p>
              <p>Customer ID: ABC123</p>
            </div>
          </div>
        </div>

        <div className="profile-information">
          <h2>Balasim's Profile Information</h2>
          <div className="profile-details">
            <div>
              <label htmlFor="name">Name:</label>
              <span className={isEditing ? "hidden" : "info"}>Balasim</span>
              <input
                type="text"
                id="name"
                className={`input-field ${isEditing ? "" : "hidden"}`}
              />
            </div>
            <div>
              <label htmlFor="lastname">Lastname:</label>
              <span className={isEditing ? "hidden" : "info"}>Balasimos</span>
              <input
                type="text"
                id="lastname"
                className={`input-field ${isEditing ? "" : "hidden"}`}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <span className={isEditing ? "hidden" : "info"}>
                dr.Balasimos@hotmail.com
              </span>
              <input
                type="email"
                id="email"
                className={`input-field ${isEditing ? "" : "hidden"}`}
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <span className={isEditing ? "hidden" : "info"}>
                BabylonStraße-3
              </span>
              <input
                type="text"
                id="address"
                className={`input-field ${isEditing ? "" : "hidden"}`}
              />
            </div>
            <div>
              <label htmlFor="region">Region:</label>
              <span className={isEditing ? "hidden" : "info"}>Wukanda</span>
              <input
                type="text"
                id="region"
                className={`input-field ${isEditing ? "" : "hidden"}`}
              />
            </div>
          </div>
          <button
            className="change-settings-btn"
            onClick={handleSettingsChange}
          >
            {isEditing ? "Save Changes" : "Change Settings"}
          </button>
        </div>
      </main>
      <div className="navigation-buttons">
        <button className="navigation-btn">Your Orders</button>
        <button className="navigation-btn">Track Order</button>
        <button className="navigation-btn">Buy Again</button>
        <button className="navigation-btn">Your Lists</button>
      </div>

      <footer className="dash-footer">
        <p>&copy; 2024 Tail Treasure</p>
      </footer>
    </div>
  );
}

export default Profile;
