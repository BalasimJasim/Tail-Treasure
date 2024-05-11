/* eslint-disable no-unused-vars */
import React from "react";
import "./Admin.css";

const AddCattegoryForm = () => {
  return (
    <div className="add-category">
      <h6 className="add-category-title">Add a new category</h6>
      <form className="add-category-form">
        <div className="add-category-form-group">
          <label htmlFor="title"> Category Title</label>
          <input type="text" id="title" placeholder="Enter Category title" />
        </div>
        <button className="add-category-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCattegoryForm;
