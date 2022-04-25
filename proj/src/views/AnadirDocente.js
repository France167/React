import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AnadirDocente() {
  const [data, setData] = useState({
      nombre: "",
      bio: "",
      posicion: "",
      LinkedIn: "",
      foto: ""
  })
  let navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: data.nombre,
        bio: data.bio,
        posicion: data.posicion,
        LinkedIn: data.LinkedIn,
        foto: "http://localhost:8080/photos/" + data.foto
      }),
    };
    let response = await fetch("http://localhost:8080/new/docente", requestOptions);
    let json = await response.json();
    setData(json);
    navigate("/docentes");
  }

  function handleForm(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  
  return (
    <div>
      <h3 className="text-center my-5">Detalles personales </h3>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handleForm(e)}
          id="nombre"
          value={data.nombre}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Nombre Completo"
          required
        />
        <textarea
          onChange={(e) => handleForm(e)}
          id="bio"
          value={data.bio}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Bio"
          rows="3"
          cols="5"
        ></textarea>
         <input
          onChange={(e) => handleForm(e)}
          id="posicion"
          value={data.posicion}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Posición"
          required
        />
         <input
          onChange={(e) => handleForm(e)}
          id="LinkedIn"
          value={data.LinkedIn}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="LinkedIn"
          required
        />
         <input
          onChange={(e) => handleForm(e)}
          id="foto"
          value={data.foto}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Foto"
          required
        />
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary mb-5 mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnadirDocente;
