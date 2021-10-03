import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Heder.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-menu fixed-top shadow-sm">
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-2"
          to="/home"
        >
          <img className="logo" src={logo} alt="" />
          <span className="fs-3 logo-text">eLang</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link menu-item"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link menu-item"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link menu-item"
                to="/about-us"
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selected"
                className="nav-link menu-item"
                to="/contact-us"
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

export default Header;
