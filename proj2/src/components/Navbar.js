import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav id="mainNavbar" className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container w-50">
        <NavLink to="/">
          {" "}
          <img
            src="../../LogoDef.png"
            alt="logo Releevant"
            style={{ width: "35%" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navLinks"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="collapse navbar-collapse d-flex justify-content-end collapse navbar-collapse"
        id="navLinks" 
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/inicio">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/cursos">
              Cursos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/desarrollo">
              Desarrollo de Software
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/startups">
              Startups
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/releevant">
              Releevant?
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
