import { Outlet, NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Layout() {
  const { auth } = useAuthContext();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            React Router
          </NavLink>
          {auth && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <main className="App">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
