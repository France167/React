export default function Card({ characters, setCharacters }) {
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
          className="col my-5 d-flex justify-content-evenly"
        >
          <div className="card" style={{ width: "18rem" }}>
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.species}</p>
              <p className="card-text">{character.location.name}</p>
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
