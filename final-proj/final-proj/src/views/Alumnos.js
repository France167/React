import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

function Alumnos() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(function() {
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
      <div class="text-center">
        <div
          class="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Alumnos</h1>
      {alumnos?.map((alumno) => {
        return (
          <div key={alumno._id}>
            <h3> {alumno.datosPersonales.nombre} </h3>
            <img src={alumno.datosPersonales.foto} alt="..." width={"15%"} />
            <h4>
              {alumno.curso} / {alumno.datosPersonales.fechaNacimiento}
            </h4>
            <a href={alumno.infoReleevant.matricula}>See Matricula</a>
            <p> {alumno.infoBootcamp.proyectoFinal.titulo} </p>
            <p> {alumno.infoBootcamp.proyectoFinal.detalles} </p>
            <h5>
              {alumno.infoBootcamp.proyectoFinal.comentariosProf.profesores[0]}
            </h5>
            <p>
              {alumno.infoBootcamp.proyectoFinal.comentariosProf.comentarios[0]}
            </p>
            <h5>
              {alumno.infoBootcamp.proyectoFinal.comentariosProf.profesores[1]}
            </h5>
            <p>
              {alumno.infoBootcamp.proyectoFinal.comentariosProf.comentarios[1]}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Alumnos;
