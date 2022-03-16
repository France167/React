export default function Nav({ characters, setCharacters }) {
  function handleInput(event) {
    setCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(event.target.value)
      )
    );
  }
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img
            src="https://www.freeiconspng.com/thumbs/rick-and-morty-folder-icon/rick-and-morty-icon-png-images-29.png"
            width="100px"
            alt="..."
          />
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
        </div>
      </nav>
    </div>
  );
}
