/* eslint-disable no-unused-vars */
import "./Admin.css";
import { Link } from "react-router-dom";
import React from "react";
import AddCattegoryForm from "./AddCategoryForm";
const AdminMain = () => {
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-main-title">Users </h5>
          <div className="admin-main-count">120</div>
          <div className="admin-card-link-wrapper">
            <Link className="admin-card-link" to="/admin-dashboard/users-table">
              See all users
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-main-title">Categories </h5>
          <div className="admin-main-count">4</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="admin-dashboard/categories-table"
            >
              See all categories
            </Link>
          </div>
        </div>

        <div className="admin-main-card">
          <h5 className="admin-main-title">Products </h5>
          <div className="admin-main-count">200</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="admin-dashboard/products-table"
            >
              See all products
            </Link>
          </div>
        </div>

        <div className="admin-main-card">
          <h5 className="admin-main-title">Reviews </h5>
          <div className="admin-main-count">120</div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="admin-dashboard/reviews-table"
            >
              See all reviews
            </Link>
          </div>
        </div>
      </div>
      <AddCattegoryForm />
    </div>
  );
};

export default AdminMain;
