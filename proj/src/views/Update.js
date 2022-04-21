import React from "react";

function Update() {
  return (
    <div>
      <h3 className="my-5 mx-5">Detalles personales: </h3>
      <form>
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Curso"
        />
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Nombre Completo"
        />
        <p className="mx-5">
          Fecha de nacimiento <input className="mx-5" type="date"></input>
        </p>

        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Residencia"
        />
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="phone"
          placeholder="Telefono"
        />
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="email"
          placeholder="Email"
        />
        <h3 className="my-5 mx-5">Info Bootcamp: </h3>
        <p className="mx-5">
          Fecha de faltas <input className="mx-5" type="date"></input>
        </p>
        <input
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Titulo de projecto final"
        />
        <textarea
          className="mx-5"
          id="textarea"
          rows="30"
          placeholder="Descripcion del proyecto"
        >
          {" "}
        </textarea>
      </form>
    </div>
  );
}

export default Update;
