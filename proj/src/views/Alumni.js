import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Buscador from "../components/Buscador";

function Alumni() {
  const [alumni, setAlumni] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:8080/alumni", {
        mode: "cors",
      });
      let json = await response.json();
      console.log(json);
      setAlumni(json);
    }
    fetchApi();
  }, []);

  if (!alumni) {
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
            <h1 className="h1 my-5 mx-5">Alumni Releevant</h1>
          </div>
        </div>
      </div>

      <Buscador />
      {alumni?.map((alumno) => {
        console.log(alumno);
        return (
          <div className="col d-flex justify-content-around" key={alumno._id}>
            <div className="card mb-5" style={{ width: "20rem" }}>
              <img
                src={alumno.alumno.datosPersonales.foto}
                className="card-img-top"
                alt="..."
                width={"15%"}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {alumno.alumno.datosPersonales.nombre}
                </h5>
                <p className="card-text">{alumno.alumno.curso}</p>
                <Link
                  to={`detalles/alumni/${alumno.alumno._id}`}
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

export default Alumni;
