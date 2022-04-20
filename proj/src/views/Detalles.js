import React from "react";
import "../App.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Detalles() {
  const [alumno, setAlumno] = useState(null);
  const { _id } = useParams();

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
    <div className="d-flex justify-content-evenly">
      <img
        src={alumno[0].datosPersonales.foto}
        className="mx-5 my-5"
        alt="foto de alumno"
        width={"30%"}
        height={"100%"}
      />
      <div className="float-end mx-5 my-5">
        <h3 className="my-4">
          <b>{alumno[0].datosPersonales.nombre}</b>
        </h3>
        <h5 className="my-3">
          <u>Datos Personales</u>:
        </h5>
        <p>
          <b>Curso</b>: {alumno[0].curso}
        </p>
        <p>
          <b>Fecha de nacimiento</b>:{" "}
          {new Date(alumno[0].datosPersonales.fechaNacimiento).toString()}
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
        <h5 className="my-3">
          <u>Info Bootcamp</u>:
        </h5>
        <p>
          <b>Fecha de falta</b>: <br />
          {new Date(alumno[0].infoBootcamp.fechaFalta[0]).toString()} <br />
          {new Date(alumno[0].infoBootcamp.fechaFalta[1]).toString()}
        </p>
        <p>
          {" "}
          <b>Proyecto Final</b>: {alumno[0].infoBootcamp.proyectoFinal.titulo}{" "}
        </p>
        <p>
          <b>Detalles</b>: {alumno[0].infoBootcamp.proyectoFinal.detalles}{" "}
        </p>
        <h5 className="my-3">
          <u>Comentarios Profesorado</u>:
        </h5>
        <h6>
          {alumno[0].infoBootcamp.proyectoFinal.comentariosProf.profesores[0]}
        </h6>
        <p>
          {alumno[0].infoBootcamp.proyectoFinal.comentariosProf.comentarios[0]}
        </p>
        <h6>
          {alumno[0].infoBootcamp.proyectoFinal.comentariosProf.profesores[1]}
        </h6>
        <p>
          {alumno[0].infoBootcamp.proyectoFinal.comentariosProf.comentarios[1]}
        </p>
        <h5 className="my-3">
          <u>Info Releevant</u>:
        </h5>
        <p>
          {" "}
          <b>Origen</b>: {alumno[0].infoReleevant.origen}{" "}
        </p>
        <p>
          {" "}
          <b>Origen</b>: {alumno[0].infoReleevant.pc}{" "}
        </p>
        <p>
          <b>Matricula</b>:{" "}
          <a href={alumno[0].infoReleevant.matricula}>Click Here!</a>
        </p>
        {alumno[0].infoReleevant.tipoDePago[0].directo !== null && (
          <p>
            <b>Tipo de pago</b>: Directo
            <p>
              {" "}
              <b>Fecha</b>:{" "}
              {alumno[0].infoReleevant.tipoDePago[0].directo.fecha}
            </p>
          </p>
        )}
        {alumno[0].infoReleevant.tipoDePago[0].cuota && (
          <>
            <p>
              <b>Numero cuotas</b>:{" "}
              {alumno[0].infoReleevant.tipoDePago[0].cuota.numerosCuotas}
            </p>
            <p>
              <b>Fechas de pago</b>:
              <p>
                {alumno[0].infoReleevant.tipoDePago[0].cuota.fechas[0]} /
                {alumno[0].infoReleevant.tipoDePago[0].cuota.fechas[1]} /
                {alumno[0].infoReleevant.tipoDePago[0].cuota.fechas[2]}
              </p>
            </p>
            {/* <p>
              {" "}
              <b>Validacion</b>:{" "}
              {alumno[0].infoReleevant.tipoDePago[0].cuota.validacion}
            </p> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Detalles;
