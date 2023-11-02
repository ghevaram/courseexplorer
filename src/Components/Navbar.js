import React, { useState } from "react";
import CourseList from "./CourseList";
import Dashboard from "../Components/Dashboard";
import "./Navbar.css";

function Navbar() {
  const [activeComponent, setActiveComponent] = useState("CourseList");

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <h4 className="navbar-brand">
              Course <span>Explorer</span>
            </h4>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeComponent === "CourseList" ? "active" : ""
              }`}
              onClick={() => handleNavClick("CourseList")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeComponent === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleNavClick("Dashboard")}
            >
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
      <div>
        {activeComponent === "CourseList" && <CourseList />}
        {activeComponent === "Dashboard" && <Dashboard />}
      </div>
    </div>
  );
}

export default Navbar;
