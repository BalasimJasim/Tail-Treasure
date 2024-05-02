import "./App.css";

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register";
import Terms from "./components/pages/Terms";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";

import { Product } from "./components/pages/Product";
import NotFound from "./components/pages/NotFound";
import ProductPage from "./components/pages/ProductPage";

import Navbar from "./components/Navbar";
import Discount from "./components/pages/Discount";
import Cart from "./components/pages/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
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
