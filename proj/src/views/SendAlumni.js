import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SendAlumni() {
  let _id = useParams();
  const [data, setData] = useState({
    idAlumno: _id,
    LinkedIn: "",
    empresa: "",
    comienzo: "",
  });

  let navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idAlumno: data.idAlumno,
        LinkedIn: data.LinkedIn,
        empresa: data.empresa,
        comienzo: data.comienzo,
      }),
    };
    let response = await fetch(
      "http://localhost:8080/new/alumni",
      requestOptions
    );
    let json = await response.json();
    setData(json);
    navigate("/alumni");
  }
  function handleForm(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div>
      <h3 className="text-center my-5">Enviar en Alumni </h3>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handleForm(e)}
          id="LinkedIn"
          value={data.LinkedIn}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="LinkedIn"
        />
        <input
          onChange={(e) => handleForm(e)}
          id="empresa"
          value={data.empresa}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Empresa"
        />
        <input
          onChange={(e) => handleForm(e)}
          id="comienzo"
          value={data.comienzo}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Fecha de comienzo"
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

export default SendAlumni;
