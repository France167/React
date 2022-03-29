import { Link } from "react-router-dom";
import "../App.css";
import { useGlobalContext } from "../context/GlobalContext";
import Pagination from "../components/Pagination";

export default function Peliculas() {
  const { peliculas, moviesPerPage, paginate } = useGlobalContext();

  return (
    <div className="container">
      <h1 className="mt-5"> Upcoming Movies </h1>
      <div className="row">
        {peliculas.map((pelicula) => (
          <div
            key={pelicula.id}
            className="col my-5 d-flex justify-content-between-evenly"
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                className="card-img-top"
                alt="movie"
              />
              <div className="card-body">
                <h5 className="card-title">{pelicula.title}</h5>
                <p className="card-text overview">{pelicula.overview}</p>
                <Link
                  to={`details/${pelicula.id}`}
                  type="button"
                  className="btn btn-outline-dark w-50  mb-3"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination  />
    </div>
  );
}
