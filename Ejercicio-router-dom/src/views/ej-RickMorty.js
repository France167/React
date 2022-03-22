import Card from "../components/RickMorty/Card";
import { useState, useEffect } from "react";
import "../components/RickMorty/Card.css";
import Nav from "../components/RickMorty/Nav";

function RickMorty() {
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
  return (
    <div className="App">
      <Nav setCharacters={setCharacters} characters={characters} />
      <Card characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default RickMorty;
