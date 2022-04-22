import React from "react";
import "../App.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Detalles() {
  const [alumno, setAlumno] = useState(null);
  const { _id } = useParams();

  let navigate = useNavigate();

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(`http://localhost:8080/buscar/${_id}`, {
          mode: "cors",
        });
        let json = await response.json();
        console.log(json);
        setAlumno(json);
      }
      fetchApi();
    },
    [_id]
  );

  async function handleDelete(_id) {
    let response = await fetch(`http://localhost:8080/delete/alumno/${_id}`, {
      mode: "cors",
      method: "DELETE",
    });
    let json = response.json();
    setAlumno(json);
    navigate("/");
  }

  if (!alumno) {
    return (
      <div className="text-center my-5">
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={alumno[0].datosPersonales.foto}
            className="mx-5 my-5"
            alt="foto de alumno"
            width={"80%"}
            height={"55%"}
          />
          <div className="">
            <Link
              to={`/update/${_id}`}
              className="btn btn-outline-dark w-100 my-3"
            >
              Update Alumno
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline-danger w-100"
            >
              Delete Alumno
            </button>
          </div>
        </div>
        <div className="col float-end mx-5 my-5">
          <h3 className="my-4">
            <b>{alumno[0].datosPersonales.nombre}</b>
          </h3>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Datos Personales
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                <p>
                    <b>Curso</b>: {alumno[0].curso}
                  </p>
                  <p>
                    <b>Fecha de nacimiento</b>:{" "}
                    {new Date(
                      alumno[0].datosPersonales.fechaNacimiento
                    ).toString()}
                  </p>
                  <p>
                    <b>Residencia</b>: {alumno[0].datosPersonales.residencia}
                  </p>
                  <p>
                    <b>Telefono</b>: {alumno[0].datosPersonales.telefono}
                  </p>
                  <p>
                    <b>Email</b>: {alumno[0].datosPersonales.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Info Bootcamp
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                <p>
                    <b>Fecha de falta</b>: <br />
                    {new Date(
                      alumno[0].infoBootcamp.fechaFalta[0]
                    ).toString()}{" "}
                    <br />
                    {new Date(alumno[0].infoBootcamp.fechaFalta[1]).toString()}
                  </p>
                  <p>
                    {" "}
                    <b>Proyecto Final</b>:{" "}
                    {alumno[0].infoBootcamp.proyectoFinal.titulo}{" "}
                  </p>
                  <p>
                    <b>Detalles</b>:{" "}
                    {alumno[0].infoBootcamp.proyectoFinal.detalles}{" "}
                  </p>
                  <p>
                    <b>Comentarios Profesorado</b>:{" "}
                    {alumno[0].infoBootcamp.proyectoFinal.comentariosProf
}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Info Releevant
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                <p>
                    {" "}
                    <b>Origen</b>: {alumno[0].infoReleevant.origen}{" "}
                  </p>
                  <p>
                    {" "}
                    <b>Pc</b>: {alumno[0].infoReleevant.pc}{" "}
                  </p>
                  <p>
                    <b>Matricula</b>:{" "}
                    <a href={alumno[0].infoReleevant.matricula}>Click Here!</a>
                  </p>
                  <p>
                    {" "}
                    <b>Tipo de pago</b>: {alumno[0].infoReleevant.tipoDePago}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalles;
{
}
