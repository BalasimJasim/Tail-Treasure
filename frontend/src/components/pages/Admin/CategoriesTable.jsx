/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./adminTable.scss";
import AdminSideBar from "./AdminSideBr.jsx";
import { Link } from "react-router-dom";
import { useCategoryContext } from "../../contexts/CategContext.jsx";
import { fetchAllCategories } from "../../../Helpers/fetchCateg.js";

const CategoriesTable = () => {
  const { deleteCategory } = useCategoryContext();
  const [categories, setCategories] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categData = await fetchAllCategories();
        setCategories(categData);
        console.log("CategTable:", categData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  const searchCategHandler = (event) => {
    setSearchCategory(event.target.value);
  };

  const filteredCategory = categories.filter((categ) =>
    `${categ.title}`.toLowerCase().includes(searchCategory.toLowerCase())
  );
  console.log("titles:", filteredCategory.title);
  return (
    <section className="table-container">
      <AdminSideBar />
      <div className="table-wrapper">
        <h1 className="table-title">
          <input
            type="text"
            placeholder="Search by category"
            value={searchCategory}
            onChange={searchCategHandler}
          />
          <table className="table">
            <thead className="table-head">
              <tr>
                <th>Count</th>
                <th>Category Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredCategory.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>
                    <b> {item.title}</b>
                  </td>
                  <td>
                    <div className="table-button-group">
                      <button onClick={() => deleteCategory(item._id)}>
                        Delete Category
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </h1>
      </div>
    </section>
  );
};

export default CategoriesTable;
