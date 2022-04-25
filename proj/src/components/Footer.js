import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top navbar-light bg-light">
        <p className="col-md-4 mb-0 text-muted">© 2022 Releevant, Inc</p>

        <img
          src="../../favicon.ico"
          alt="logo Releevant"
          style={{ width: "5%" }}
        />

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-muted">
              Alumos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="alumni" className="nav-link px-2 text-muted">
              Alumni
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/eventos" className="nav-link px-2 text-muted">
              Eventos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/expertos" className="nav-link px-2 text-muted">
              Expertos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/docentes" className="nav-link px-2 text-muted">
              Docentes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/candidatos" className="nav-link px-2 text-muted">
              Candidatos
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
