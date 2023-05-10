import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/digilogo.png";
// import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  // const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            className="nav-logo mt-2"
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
          aria-controls="navbarNav"
          aria-expanded={!collapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                exact
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={toggleNavbar}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/about"
                onClick={toggleNavbar}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/service"
                onClick={toggleNavbar}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/courses"
                onClick={toggleNavbar}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/blogs"
                onClick={toggleNavbar}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/contact"
                onClick={toggleNavbar}
              >
                Contact
              </NavLink>
            </li>
            {/* <li>
              {
                isAuthenticated &&
                 <p className="container user text-primary " >
                  Hello! {user.name}
                </p>
              }
            </li> */}
            {/* {isAuthenticated ? (
            
                <button type="button" className="btn-primary loginbtn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              
            ) : (
            
                <button type="button" className="btn-primary loginbtn" onClick={() => loginWithRedirect()}>Log In</button>
              
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
