import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "../App.css";

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US"
      );
      let json = await response.json();
      json = json.results;
      setPeliculas(json);
    }
    fetchApi();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {peliculas.map((pelicula) => (
          <div
            key={pelicula.id}
            className="col my-5 d-flex justify-content-between-evenly"
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pelicula.poster_path}
                className="card-img-top"
                alt="movie"
              />
              <div className="card-body">
                <h5 className="card-title">{pelicula.title}</h5>
                <p className="card-text">{pelicula.overview}</p>
                <Link
                to={`details/${pelicula.id}`}
                type="button"
                className="btn btn-outline-dark w-100  mb-3"
              >
                Details
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
