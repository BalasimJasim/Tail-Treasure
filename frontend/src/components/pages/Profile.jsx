import React, { useState } from "react";
import "./profile.scss";
import av1 from "../../../images/av1.png";
import { useUserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { state } = useUserContext();
  const { user } = state;
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    address: user?.address || "",
    region: user?.region || "",
  });

  const handleSettingsChange = () => {
    if (isEditing) {
      // Save changes (you would implement saving logic here)
      console.log("Saving changes:", formData);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="dash-container">
      <header className="dash-header">
        <h1>{user?.firstName}</h1>
        <nav className="dash-sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CustomerSupportForm">Support</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="dash-content">
        {user ? (
          <div className="profile-container">
            <ProfileHeader user={user} avatar={av1} />
            <ProfileInformation
              isEditing={isEditing}
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <button
              className="change-settings-btn"
              onClick={handleSettingsChange}
            >
              {isEditing ? "Save Changes" : "Change Settings"}
            </button>
          </div>
        ) : (
          <div className="login-link">
            <p>
              Please <Link to="/login">login</Link> to view your profile.
            </p>
          </div>
        )}

        <div className="navigation-buttons">
          <button className="navigation-btn">Your Orders</button>
          <button className="navigation-btn">Track Order</button>
          <button className="navigation-btn">Buy Again</button>
          <button className="navigation-btn">Your Lists</button>
        </div>
      </main>

      <footer className="dash-footer">
        <p>&copy; 2024 Tail Treasure</p>
      </footer>
    </div>
  );
};

const ProfileHeader = ({ user, avatar }) => (
  <div className="profile-info">
    <div className="profile-image">
      <img src={avatar} alt="Profile" />
    </div>
    <div className="profile-details">
      <h2>
        {user?.firstName} {user?.lastName}
      </h2>
      <p>User ID: {user?.id}</p>
    </div>
  </div>
);

const ProfileInformation = ({ isEditing, formData, handleInputChange }) => (
  <div className="profile-information">
    <h2>{formData.firstName} Profile Information</h2>
    <div className="profile-details">
      {["firstName", "lastName", "email", "address", "region"].map((field) => (
        <div key={field}>
          <label htmlFor={field}>{capitalize(field)}:</label>
          {isEditing ? (
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              value={formData[field]}
              onChange={handleInputChange}
              className="input-field"
            />
          ) : (
            <span className="info">{formData[field]}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default Profile;
