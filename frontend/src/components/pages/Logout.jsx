import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <p>You have been successfully logged out.</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Logout;
