export default function Agenda({ contactos, setUsuarios }) {
  const handleClick = (id) => {
    return function () {
      window.alert("Are you sure you want to eliminate the contact?");
      setUsuarios(contactos.filter((item) => item.id !== id));
    };
  };
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
                  <li className=" list-group-item active">
                    <strong>Contacto {index}</strong>
                  </li>
                  <li className="list-group-item">{nombre}</li>
                  <li className="list-group-item">{apellido}</li>
                  <li className="list-group-item">{telefono}</li>
                  <li className="list-group-item">
                    {direccion}, {cod}, {ciudad}
                  </li>
                  <li className="list-group-item">
                    <button
                      onClick={handleClick(id)}
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
