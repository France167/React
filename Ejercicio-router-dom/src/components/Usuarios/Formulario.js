import { useState } from "react";

// libreria per generare id automaticamente
import { v4 as uuid4 } from "uuid";

export default function Formulario({ setUsuarios }) {
  /* const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cod, setCod] = useState("");
  const [telefono, setTelefono] = useState(""); */

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    ciudad: "",
    cod: "",
    telefono: "",
  });

  const usuario = {
    id: uuid4(),
    nombre: user.nombre,
    apellido: user.apellido,
    direccion: user.direccion,
    ciudad: user.ciudad,
    cod: user.cod,
    telefono: user.telefono,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuarios((usuarios) => [...usuarios, usuario]);
  };

  function handleUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  /* function handleName(event) {
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
  } */

  return (
    <div className=" w-75 mt-5 mx-auto mb-5 border border-2 rounded">
      <h3 className="mt-5">Nuevo contacto</h3>
      <form onSubmit={handleSubmit}>
        <div className="container mt-5">
          <div className="row mb-2">
            <div className="col">
              <input
                name="nombre"
                onChange={handleUser}
                type="text"
                className="form-control"
                placeholder="Introduce un nombre"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                name="apellido"
                onChange={handleUser}
                type="text"
                className="form-control"
                placeholder="Introduce un apellido"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <input
                name="direccion"
                onChange={handleUser}
                type="text"
                className="form-control"
                placeholder="Introduce la direccìon"
                aria-label="Address"
              />
            </div>
            <div className="col">
              <input
                name="ciudad"
                onChange={handleUser}
                type="text"
                className="form-control"
                placeholder="Introduce la provincia"
                aria-label="Ciudad"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <input
                name="cod"
                onChange={handleUser}
                type="text"
                className="form-control"
                placeholder="Introduce un codigo postal"
                aria-label="Cod"
              />
            </div>
            <div className="col">
              <input
                name="telefono"
                onChange={handleUser}
                type="text"
                className="form-control"
                placeholder="Introduce el numero de telefono"
                aria-label="Telefono"
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
