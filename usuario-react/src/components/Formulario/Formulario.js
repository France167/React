import { useState } from "react";

export default function Formulario({ setUsuarios }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cod, setCod] = useState("");
  const [telefono, setTelefono] = useState("");

  const usuario = {
    id: 4,
    nombre: name,
    apellido: surname,
    direccion: direccion,
    ciudad: ciudad,
    cod: cod,
    telefono: telefono,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuarios((usuarios) => [...usuarios, usuario]);
  };

  function handleName(event) {
    setName(event.target.value);
  }
  function handleSurname(event) {
    setSurname(event.target.value);
  }
  function handleDireccion(event) {
    setDireccion(event.target.value);
  }
  function handleCiudad(event) {
    setCiudad(event.target.value);
  }
  function handleCod(event) {
    setCod(event.target.value);
  }
  function handleTelefono(event) {
    setTelefono(event.target.value);
  }

  return (
    <div className="form w-75 mt-5 mx-auto mb-5 border border-2 rounded">
      <h3 className="mt-5">Nuevo contacto</h3>
      <form onSubmit={handleSubmit}>
        <div className="container mt-5">
          <div className="row mb-2">
            <div className="col">
              <input
                onChange={handleName}
                type="text"
                className="form-control"
                placeholder="Introduce un nombre"
                aria-label="First name"
                required
              />
            </div>
            <div className="col">
              <input
                onChange={handleSurname}
                type="text"
                className="form-control"
                placeholder="Introduce un apellido"
                aria-label="Last name"
                required
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <input
                onChange={handleDireccion}
                type="text"
                className="form-control"
                placeholder="Introduce la direccìon"
                aria-label="First name"
                required
              />
            </div>
            <div className="col">
              <input
                onChange={handleCiudad}
                type="text"
                className="form-control"
                placeholder="Introduce la provincia"
                aria-label="Last name"
                required
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <input
                onChange={handleCod}
                type="text"
                className="form-control"
                placeholder="Introduce un codigo postal"
                aria-label="First name"
                required
              />
            </div>
            <div className="col">
              <input
                onChange={handleTelefono}
                type="text"
                className="form-control"
                placeholder="Introduce el numero de telefono"
                aria-label="Last name"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success mb-5">
          Registrar
        </button>
      </form>
    </div>
  );
}
