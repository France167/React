import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-10">
      <div className="container-fluid">
        <NavLink to="/">
          {" "}
          <img
            src="../../LogoDef.png"
            alt="logo Releevant"
            style={{ width: "25%" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item float-end">
            <NavLink className="nav-link" aria-current="page" to="/">
              Alumnos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/alumni">
              Alumni
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Eventos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Expertos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Docentes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Candidatos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
