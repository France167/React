import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detalle() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        let json = await response.json();
        setCharacter(json);
      }
      fetchApi();
    },
    [id]
  );

  if (!character) {
    return (
      <div class="text-center">
        <div
          class="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <h2 className="mt-5">Details for {character.name}</h2>
      <div className="card mb-3 my-5" style={{ minWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={character.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title mt-5">{character.name}</h4>
              <p className="card-text">Status: {character.status}</p>
              <p className="card-text">Gender: {character.gender}</p>
              <p className="card-text">Origin: {character.origin.name}</p>
              <p className="card-text">Location: {character.location.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
