import { useGlobalContext } from "../context/GlobalContext";

import Card from "../components/RickMorty/Card";
import "../components/RickMorty/Card.css";
import Nav from "../components/RickMorty/Nav";

function RickMorty() {
  const { characters, setCharacters } = useGlobalContext();
  return (
    <div className="App">
      <Nav setCharacters={setCharacters} characters={characters} />
      <Card characters={characters} setCharacters={setCharacters} />
    </div>
  );
}

export default RickMorty;
