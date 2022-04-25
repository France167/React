import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import Buscador from "../components/Buscador";
import "animate.css";
import {motion} from "framer-motion";

function Alumnos() {
  const { alumnos } = useGlobalContext();

  if (!alumnos) {
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
    <div className="margine container">
      <div className="row mb-5">
        <h1 className="h1 my-5 text-center animate__animated animate__fadeInUp">
          Alumnos Releevant
        </h1>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-9">
              <Buscador />
            </div>
            <div className="col">
              <Link to="/anadir" className="btn btn-warning m-auto mb-5">
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
                Añadir nuevo alumno
              </Link>
            </div>
          </div>
        </div>

        {alumnos?.map((alumno) => {
          return (
            <motion.div 
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
              className="col d-flex justify-content-around" key={alumno._id}>
              <div className="card mb-5" style={{ width: "19rem" }}>
                <img
                  src={alumno.alumno.datosPersonales.foto}
                  className="card-img-top embed-responsive-item"
                  alt="foto alumno"
                  width={"15%"}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {alumno.alumno.datosPersonales.nombre}
                  </h5>
                  <p className="card-text">{alumno.alumno.curso}</p>
                  {/* <p className="card-text">{alumno.alumno.datosPersonales.telefono}</p> */}
                  <Link
                    to={`detalles/${alumno._id}`}
                    className="btn btn-secondary w-100 m-auto"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Alumnos;
