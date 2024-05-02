import "./App.css";

// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register";
import Terms from "./components/pages/Terms";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Reset from "./components/pages/Reset";
import Forgot from "./components/pages/Forgot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </>
  );
}

export default App;
