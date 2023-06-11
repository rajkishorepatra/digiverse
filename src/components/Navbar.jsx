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
        <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            className="nav-logo mt-2"
            src={logo}
            style={{ width: 100 }}
            alt="Digiverse360 Logo"
          />
        </NavLink>
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
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className={`navbar-nav ms-auto mb-lg-0 ${collapsed ? "" : "align-items-center"}`}>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                exact
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={closeNavbar}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/about"
                onClick={closeNavbar}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/service"
                onClick={closeNavbar}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/courses"
                onClick={closeNavbar}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/blogs"
                onClick={closeNavbar}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
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
