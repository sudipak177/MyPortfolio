import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import "../css/Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      {/* Left Side - Navigation Bar */}
      <div className="navbar-container">
        <NavBar />
      </div>

      {/* Right Side - Main Content */}
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
