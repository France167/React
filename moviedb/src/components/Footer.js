export default function Footer() {
  return (
    <div>
      <footer className="py-3 mt-4 bg-dark">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Upcoming
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.themoviedb.org/"
              className="nav-link px-2 text-muted"
            >
              TheMovieDataBase
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.imdb.com/"
              className="nav-link px-2 text-muted"
            >
              IMDB
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2022 Releevant, Inc</p>
      </footer>
    </div>
  );
}
