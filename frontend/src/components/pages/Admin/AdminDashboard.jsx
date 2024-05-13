/* eslint-disable no-unused-vars */
import "./Admin.css";
import React from "react";
import AdminMain from "./AdminMain";
import AdminSideBr from "./AdminSideBr";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminMain />
      <AdminSideBr />
    </div>
  );
};

export default AdminDashboard;
