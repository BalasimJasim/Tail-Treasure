/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./profile.css";
import av1 from "../../../images/av1.png";

function Profile() {
  return (
    <div className="dash-container">
      <header className="dash-header">
        <h1>Profile</h1>

        <nav className="dash-sidebar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="CustomerSupportForm">Support</a>
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
            <p>Name: Balasim</p>
            <p>Lastname: Balasimos</p>
            <p>Email: dr.Balasimos@hotmail.com</p>
            <p>Address: BabylonStraße-3</p>
            <p>Region: Wukanda</p>
          </div>
          <button className="change-settings-btn">Change Settings</button>
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
