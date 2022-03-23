import { Link } from "react-router-dom";
import SwitchModeContext from "../contexts/SwitchMode";
import { useContext } from "react";

export default function Nav({ characters, setCharacters }) {
  const { toggleUiMode, uiMode } = useContext(SwitchModeContext);

  function handleInput(event) {
    setCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(event.target.value)
      )
    );
  }
  return (
    <div>
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <Link to="/">
            <img
              src="https://www.freeiconspng.com/thumbs/rick-and-morty-folder-icon/rick-and-morty-icon-png-images-29.png"
              width="100px"
              alt="..."
            />
          </Link>
          <h1>Rick & Morty</h1>
          <div className="input-group rounded w-25">
            <input
              onChange={handleInput}
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />

            <span className="input-group-text border-0" id="search-addon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
          <div className="form-check form-switch">
            <input
              onChange={toggleUiMode}
              value={uiMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
