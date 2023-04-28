import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../images/digilogo.png";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              className=" nav-logo mt-2"
              src={logo}
              style={{ width: 100 }}
              alt="Digiverse360 Logo"
            />
            <strong> DigiVerse360</strong>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link "
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link "
                  to="/service"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link "
                  to="/courses"
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link "
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
