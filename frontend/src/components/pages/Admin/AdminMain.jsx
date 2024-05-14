/* eslint-disable no-unused-vars */
import "./Admin.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AddCattegoryForm from "./AddCategoryForm";
// import { useUserContext } from "../../contexts/UserContext";
import { fetchAllUsers } from "../../../Helpers/fetches";
import { fetchAllCategories } from "../../../Helpers/fetchCateg";
const AdminMain = () => {
  // const { userCount } = useUserContext();
  const [usersCount, setUserCount] = useState([]);
  const [categoriesCount, setCategCount] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchAllUsers();
        const count = userData.length;
        setUserCount(count);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categData = await fetchAllCategories();
        const count = categData.length;
        setCategCount(count);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);
  console.log("USERcounts:", usersCount);
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <div className="admin-main-card">
          <h5 className="admin-main-title">Users </h5>
          <div className="admin-main-count">{usersCount}</div>
          <div className="admin-card-link-wrapper">
            <Link className="admin-card-link" to="/admin-dashboard/users-table">
              See all users
            </Link>
          </div>
        </div>
        <div className="admin-main-card">
          <h5 className="admin-main-title">Categories </h5>
          <div className="admin-main-count">{categoriesCount} </div>
          <div className="admin-card-link-wrapper">
            <Link
              className="admin-card-link"
              to="/admin-dashboard/categories-table"
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
              to="/admin-dashboard/products-table"
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
