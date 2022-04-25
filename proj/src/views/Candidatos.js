import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Buscador from "../components/Buscador";
import { useGlobalContext } from "../contexts/GlobalContext";
import {motion} from "framer-motion";
import "animate.css";

function Candidatos() {
  const { candidatos, setCandidatos } = useGlobalContext();

  let navigate = useNavigate();

  async function handleDelete(_id) {
    let response = await fetch(
      `http://localhost:8080/delete/candidato/${_id}`,
      {
        mode: "cors",
        method: "DELETE",
      }
    );
    let json = await response.json();
    setCandidatos(json);
    navigate("/candidatos");
  }

  if (!candidatos) {
    return (
      <div className="text-center">
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
      <div className="row mb-5">
        <h1 className="h1 my-5 text-center animate__animated animate__fadeInUp">
          Candidatos Releevant
        </h1>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-9">
              <Buscador />
            </div>
            <div className="col">
              <Link to="/anadircandidato" className="btn btn-warning m-auto mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                Añadir nuevo candidato
              </Link>
            </div>
          </div>
        </div>
        {candidatos.map((candidato) => {
          return (
            <motion.div
            animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
              className="col d-flex justify-content-around"
              key={candidato._id}
            >
              <div className="card mb-5" style={{ width: "25rem" }}>
                <div className="card-header">
                  <h4>{candidato.nombre}</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <p>
                      <b>Telefono</b>: {candidato.telefono}
                    </p>
                    <p>
                      <b>Email</b>: {candidato.email}
                    </p>
                    <p>
                      <b>Edad</b>: {candidato.edad}
                    </p>
                  </li>
                  <li className="list-group-item">
                    <p>
                      <b>Estudios</b>: {candidato.estudios}
                    </p>
                    <p>
                      <b>Profesión</b>: {candidato.profesion}
                    </p>
                  </li>
                  <li className="list-group-item">
                    <p>
                      <b>Curso de interés</b>: {candidato.cursoInteres}
                    </p>
                    <p>
                      <b>Origen</b>: {candidato.origen}
                    </p>
                    <p>
                      <b>Estado</b>: {candidato.estado}
                    </p>
                    <p>
                      <b>Fecha de entrada</b>: {candidato.fechaEntrada}
                    </p>
                    <p>
                      <b>Llammada</b>: {candidato.call}
                    </p>
                    <p>
                      <b>Fecha de contacto</b>: {candidato.fechaContacto}
                    </p>
                    <p>
                      <b>Fecha de la cita</b>: {candidato.cita.fecha} a la{" "}
                      {candidato.cita.ora}
                    </p>
                  </li>
                  <li className="list-group-item">
                    <p>
                      <b>Comentarios</b>: {candidato.detalles}
                    </p>
                  </li>
                  <li className="list-group-item">
                    <Link
                      to={`/updatecandidato/${candidato._id}`}
                      className="btn btn-warning w-100 my-3"
                    >
                      Update Candidato
                    </Link>
                    <button
                      onClick={() => handleDelete(candidato._id)}
                      className="btn btn-secondary w-100 my-2"
                    >
                      Delete Candidato
                    </button>
                  </li>
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Candidatos;
