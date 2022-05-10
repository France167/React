import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav
      id="mainNavbar"
      className="navbar navbar-expand-md  navbar-dark fixed-top"
    >
      <div className="row">
        <div className="container col-5">
          <HashLink to="/inicio/#video-inicio">
            {" "}
            <img
              src="../../LogoDef.png"
              alt="logo Releevant"
              className="logo"
            />
          </HashLink>
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
        <div className="col-7 collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <HashLink
                className="navLink nav-link"
                aria-current="page"
                to="/curso-desarrollo/#foto-cursoweb"
              >
                Bootcamp
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="navLink nav-link"
                aria-current="page"
                to="/desarrollo/#desarrollo"
              >
                Para empresas
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="navLink nav-link" to="/releevant/#releevant">
                Releevant?
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="btn-light navLink nav-link bottone-nav"
                to="/inicio/#form-inicio"
              >
                <span>Más info!</span>
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
