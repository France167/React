export default function Agenda({ contactos, setUsuarios }) {
  function handleDelete(id) {
    return function () {
      alert("Are you sure?");
      setUsuarios(contactos.filter((user) => user.id !== id));
    };
  }

  return (
    <div className="list-group w-100 mt-5 mx-auto">
      <h3>Lista de contactos</h3>
      <div className="container mt-5">
        <div className="row">
          {contactos.map(
            (
              { id, nombre, apellido, direccion, ciudad, cod, telefono },
              index
            ) => (
              <div className="col" key={id}>
                <ul className="list-group">
                  <li className=" list-group-item active">Contacto {index}</li>
                  <li className="list-group-item">{nombre}</li>
                  <li className="list-group-item">{apellido}</li>
                  <li className="list-group-item">{telefono}</li>
                  <li className="list-group-item">
                    {direccion}, {cod}, {ciudad}
                  </li>
                  <li className="list-group-item">
                    <button
                      onClick={handleDelete(id)}
                      className="btn btn-warning"
                    >
                      Eliminar
                    </button>
                  </li>
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
