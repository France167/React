import { NavLink } from "react-router-dom";
import "../../App.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-evenly">
      <li className="nav-link">
        <NavLink className="text-decoration-none link-color" to="/">
          Card
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink className="text-decoration-none link-color" to="usuarios">
        Usuarios
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink className="text-decoration-none link-color" to="todolist">
          Todo List
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink className="text-decoration-none link-color" to="rickmorty">
          Rick & Morty
        </NavLink>
      </li>
    </nav>
  );
}
