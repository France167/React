import { Outlet, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Footer from "./Footer";

function Layout() {
  const { auth, logout } = useAuthContext();
  return (
    <div>
      <nav
        style={{ height: "100px" }}
        className="navbar navbar-expand-lg navbar-dark bg-dark mb-3"
      >
        {auth && (
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Upcomings
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.themoviedb.org/">
                  TheMovieDataBase
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.imdb.com/">
                  IMDB
                </a>
              </li>
            </ul>
            <div className="float-end">
              <button onClick={() => logout()} className="btn btn-warning">
                Log Out
              </button>
            </div>
          </div>
        )}
      </nav>
      <main className="App">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
