import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../images/digilogo_new.png";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const closeNavbar = () => setCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        {/* Left side */}
        <div
          className={`navbar-brand d-flex align-items-center ${
            collapsed ? "d-none" : "show"
          } xs:show`}
        >
          <NavLink to="/" onClick={closeNavbar}>
            <img
              className="nav-logo mt-2"
              src={logo}
              style={{ width: 100 }}
              alt="Digiverse360 Logo"
            />
          </NavLink>
        </div>

        {/* Toggler button */}
        <button
          className={`navbar-toggler ${collapsed ? "" : "collapsed"}`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!collapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          {collapsed ? (
            <FaBars className="navbar-toggler-icon" />
          ) : (
            <FaTimes className="navbar-close-icon" />
          )}
        </button>

        {/* Right side */}
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-auto">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/service"
                onClick={closeNavbar}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-auto">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/courses"
                onClick={closeNavbar}
              >
                Courses
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Center */}
        <div
          className={`navbar-brand d-flex align-items-center justify-content-center mx-5  ${
            collapsed ? "show" : "d-none"
          }`}
        >
          <NavLink to="/" onClick={closeNavbar}>
            <img
              className="nav-logo mt-2"
              src={logo}
              style={{ width: 100 }}
              alt="Digiverse360 Logo"
            />
          </NavLink>
        </div>

        {/* Left side */}
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-auto">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/blogs"
                onClick={closeNavbar}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item mx-auto">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/contact"
                onClick={closeNavbar}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
