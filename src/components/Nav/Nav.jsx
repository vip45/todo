import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <header className="container-fluid bg-danger-subtle border-bottom ">
      <nav className="navbar navbar-expand-lg container">
        <a className="navbar-brand fw-bold" href="#">
          TODO
        </a>
        {/* Mobile toggle */}
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
        {/* Right side links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                end
                to="/todo/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/todo/profile"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                to="/todo/Login"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
