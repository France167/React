import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  const [characters, setCharacters] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("https://rickandmortyapi.com/api/character");
      let json = await response.json();
      json = json.results;
      setCharacters(json.splice(0, 20));
    }
    fetchApi();
  }, []);
  function handleDelete(id) {
    return function () {
      setCharacters(characters.filter((character) => character.id !== id));
    };
  }

  return (
    <div className="row">
      {characters.map((character) => (
        <div
          key={character.id}
          className="col my-5 d-flex justify-content-between-evenly"
        >
          <div className="card" style={{ width: "18rem" }}>
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.species}</p>
              <p className="card-text">{character.location.name}</p>
              <Link
                to={`detalle/${character.id}`}
                type="button"
                className="btn btn-outline-dark w-100  mb-3"
              >
                Details
              </Link>
              <button
                onClick={handleDelete(character.id)}
                type="button"
                className="btn btn-outline-dark w-100"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
