import "./App.css";

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/forms/Register.jsx";
import Terms from "./components/pages/Terms";
import Login from "./components/pages/forms/Login";
import Reset from "./components/pages/forms/Reset";
import Forgot from "./components/pages/forms/Forgot";
import Profile from "./components/pages/Profile.jsx";

import { Product } from "./components/pages/Product/Product";
import NotFound from "./components/pages/NotFound";
import ProductPage from "./components/pages/ProductPage/ProductPage";

import Navbar from "./components/Navbar";
import Discount from "./components/pages/Discount";

// import Headroom from "react-headroom";
import { HideNavBar } from "./components/hidenavbar/HideNavBar.jsx";
import Cart from "./components/pages/cart/Cart";
import { Home } from "./components/pages/Home";
import Verifying from "./components/pages/forms/VeryfyingUser.jsx";
import AdminDashboard from "./components/pages/Admin/AdminDashboard.jsx";
import UsersTable from "./components/pages/Admin/UsersTable.jsx";
import CategoriesTable from "./components/pages/Admin/CategoriesTable.jsx";
// import { CatProducts } from "./components/pages/ProductPage/productsByCategories/CatProducts.jsx";
// import ProductsTable from "./components/pages/Admin/ProductsTable.jsx";

function App() {
  return (
    <>
      <HideNavBar>
        <Navbar />
      </HideNavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/users-table" element={<UsersTable />} />
        {/* <Route
          path="/admin-dashboard/products-table"
          element={<ProductsTable />}
        /> */}
        <Route
          path="/admin-dashboard/categories-table"
          element={<CategoriesTable />}
        />

        <Route path="/profile" element={<Profile />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/auth/:userId/verify/:token" element={<Verifying />} />

        <Route path="/reset" element={<Reset />} />
        <Route path="/forgot/" element={<Forgot />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/products" element={<Product />} />
        <Route path="/products/:productID" element={<ProductPage />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/logout/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
