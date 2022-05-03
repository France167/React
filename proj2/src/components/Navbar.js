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
              style={{ width: "50%" }}
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
              <HashLink className="navLink nav-link" to="/inicio/#video-inicio">
                Inicio
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="navLink nav-link"
                aria-current="page"
                to="/cursos/#foto-curso"
              >
                Cursos
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="navLink nav-link"
                aria-current="page"
                to="/desarrollo/#desarrollo"
              >
                Desarrollo de Software
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="navLink nav-link" to="/startups/#startup">
                Startups
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="navLink nav-link" to="/releevant/#releevant">
                Releevant?
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
