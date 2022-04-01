export default function Navbar() {
  return (
    <div>
      <nav
        style={{ height: "100px" }}
        className="navbar navbar-expand-lg navbar-dark bg-dark mb-3"
      >
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Upcomings
              </a>
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
        </div>
      </nav>
    </div>
  );
}
