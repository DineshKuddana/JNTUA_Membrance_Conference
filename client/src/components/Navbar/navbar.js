import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import collegelogo from "../../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={collegelogo} alt="college-logo" width="80px" height="80px" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto items">
          <li className="nav-item">
            <Link className={getNavLinkClass("/home")} to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getNavLinkClass("/about")} to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className={getNavLinkClass("/committees")} to="/committees">
              Committees
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#registration"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Registration
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link
                className={getNavLinkClass("/registration/process")}
                to="/registration/process"
              >
                Registration Payment Details
              </Link>
              <Link
                className={getNavLinkClass("/registration/form")}
                to="/registration/form"
              >
                Registration Form
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#downloads"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Downloads
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a  className = "dropdown-item" href="https://drive.google.com/file/d/12Vg7hGdVfyxxXUnNaw8Sp0UE3UL9RXzk/view" target="_blank" rel="noreferrer">Brochure</a>
              <Link className="dropdown-item" to="/downloads/papertemplate">
                Paper Template
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className={getNavLinkClass("/admin")} to="/admin">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
