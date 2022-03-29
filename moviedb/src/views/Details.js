import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Details() {
  const [pelicula, setPelicula] = useState(null);
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US`
        );
        let json = await response.json();
        setPelicula(json);
      }
      fetchApi();
    },
    [id]
  );

  if (!pelicula) {
    return (
      <div className="text-center">
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <img
        src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`}
        className="img-fluid rounded-start mt-5 mb-4"
        width={"80%"}
        height={"400px"}
        alt="details"
      />
      <h1 className="mt-3">
        {pelicula.title}{" "}
        <span class="badge rounded-pill bg-warning text-dark">
          {pelicula.vote_average}
        </span>
      </h1>
      <p>
        <small>
          {pelicula.release_date} {pelicula.genres.name}
        </small>
      </p>
      <div className="container" width={"30%"}>
        <p>{pelicula.overview}</p>
      </div>
      <a
        className="btn btn-warning my-3"
        href={`https://www.imdb.com/title/${pelicula.imdb_id}`}
      >
        Go to IMDB
      </a>
    </div>
  );
}
