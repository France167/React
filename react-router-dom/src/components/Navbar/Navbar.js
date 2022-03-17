import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="Contacto">Contacto</NavLink>
      </div>
    </nav>
  );
}
