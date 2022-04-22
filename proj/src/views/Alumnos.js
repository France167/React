import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Buscador from "../components/Buscador";

function Alumnos() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:8080/", {
        mode: "cors",
      });
      let json = await response.json();
      console.log(json);
      setAlumnos(json);
    }
    fetchApi();
  }, []);

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
    <div className="row mb-5">
      <div className="container">
      <div className="row justify-content-between">
        <div className="col-10">
      <h1 className="h1 my-5 mx-5">Alumnos Releevant</h1>
      </div>
      <div className="col">
        <button className="btn btn-outline-warning my-5">
          Añadir nuevo alumno
        </button>
        </div>
      </div>
      </div>




      <Buscador />
      {alumnos?.map((alumno) => {
        return (
          <div className="col d-flex justify-content-around" key={alumno._id}>
            <div className="card mb-5" style={{ width: "20rem" }}>
              <img
                src={alumno.datosPersonales.foto}
                className="card-img-top"
                alt="..."
                width={"15%"}
              />
              <div className="card-body">
                <h5 className="card-title">{alumno.datosPersonales.nombre}</h5>
                <p className="card-text">{alumno.curso}</p>
                <Link
                  to={`detalles/${alumno._id}`}
                  className="btn btn-outline-dark w-100 m-auto"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Alumnos;
