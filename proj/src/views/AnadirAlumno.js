import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AnadirAlumno() {
  const [data, setData] = useState({
    curso: "",
    datosPersonales: {
      nombre: "",
      foto: "",
      fechaNacimiento: "",
      residencia: "",
      telefono: "",
      email: "",
    },
    infoBootcamp: {
      fechaFalta: "",
      proyectoFinal: {
        titulo: "",
        detalles: "",
        comentariosProf: "",
      },
    },
    infoReleevant: {
      origen: "",
      pc: "",
      matricula: "",
      tipoDePago: "",
      detallesPago: "",
    },
  });
  let navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        curso: data.curso,
        datosPersonales: {
          nombre: data.datosPersonales.nombre,
          foto: data.datosPersonales.foto,
          fechaNacimiento: data.datosPersonales.fechaNacimiento,
          residencia: data.datosPersonales.residencia,
          telefono: data.datosPersonales.telefono,
          email: data.datosPersonales.email,
        },
        infoBootcamp: {
          fechaFalta: data.infoBootcamp.fechaFalta,
          proyectoFinal: {
            titulo: data.infoBootcamp.proyectoFinal.titulo,
            detalles: data.infoBootcamp.proyectoFinal.detalles,
            comentariosProf: data.infoBootcamp.proyectoFinal.comentariosProf,
          },
        },
        infoReleevant: {
          origen: data.infoReleevant.origen,
          pc: data.infoReleevant.pc,
          matricula: data.infoReleevant.matricula,
          tipoDePago: data.infoReleevant.tipoDePago,
          detallesPago: data.infoReleevant.detallesPago,
        },
      }),
    };
    let response = await fetch("http://localhost:8080/new", requestOptions);
    let json = await response.json();
    setData(json);
    navigate("/");
  }

  function handleForm(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function handleDatosPersonales(e) {
    const newData = { ...data };
    newData.datosPersonales[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function handleInfoBootcamp(e) {
    const newData = { ...data };
    newData.infoBootcamp[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function handleProyectoFinal(e) {
    const newData = { ...data };
    newData.infoBootcamp.proyectoFinal[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  function handleInfoReleevant(e) {
    const newData = { ...data };
    newData.infoReleevant[e.target.id] = e.target.value;
    console.log(e.target);
    console.log(e.target.value);
    setData(newData);
    console.log(newData);
  }

  return (
    <div>
      <h3 className="text-center my-5">Detalles personales </h3>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handleForm(e)}
          id="curso"
          value={data.curso}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Curso"
          required
        />
        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="foto"
          value={data.datosPersonales.foto}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Foto"
          required
        />
        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="nombre"
          value={data.datosPersonales.nombre}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Nombre Completo"
          required
        />
        <div className="mx-5">
          Fecha de nacimiento{" "}
          <input
            onChange={(e) => handleDatosPersonales(e)}
            id="fechaNacimiento"
            value={data.datosPersonales.fechaNacimiento}
            className="mx-5"
            type="date"
            required
          ></input>
        </div>

        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="residencia"
          value={data.datosPersonales.residencia}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Residencia"
          required
        />
        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="telefono"
          value={data.datosPersonales.telefono}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="phone"
          placeholder="Telefono"
          required
        />
        <input
          onChange={(e) => handleDatosPersonales(e)}
          id="email"
          value={data.datosPersonales.email}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="email"
          placeholder="Email"
          required
        />
        <h3 className="text-center my-5">Info Bootcamp </h3>
        <p className="mx-5">
          Fecha de faltas{" "}
          <input
            onChange={(e) => handleInfoBootcamp(e)}
            id="fechaFalta"
            value={data.infoBootcamp.fechaFalta}
            className="mx-5"
            type="date"
            required
          ></input>
        </p>
        <input
          onChange={(e) => handleProyectoFinal(e)}
          id="titulo"
          value={data.infoBootcamp.proyectoFinal.titulo}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Titulo de projecto final"
          required
        />

        <textarea
          onChange={(e) => handleProyectoFinal(e)}
          id="detalles"
          value={data.infoBootcamp.proyectoFinal.detalles}
          className="form-control w-50 m-auto  my-3"
          placeholder="Descripción del proyecto"
          rows="3"
        ></textarea>
        <textarea
          onChange={(e) => handleProyectoFinal(e)}
          id="comentariosProf"
          value={data.infoBootcamp.proyectoFinal.comentariosProf}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Comentarios Profesorado"
          rows="3"
          cols="5"
        ></textarea>
        <h3 className="text-center my-5">Info Releevant </h3>
        <select
          onChange={(e) => handleInfoReleevant(e)}
          id="origen"
          value={data.infoReleevant.origen}
          className="form-control form-control-sm custom-select w-50 m-auto"
          required
        >
          <option defaultValue>Origen..</option>
          <option value="Landing">Landing</option>
          <option value="Web">Web</option>
          <option value="Call">Call</option>
          <option value="Whatsapp">Whatsapp</option>
          <option value="Mail">Mail</option>
          <option value="Boca">Boca_Boca</option>
          <option value="Referral">Referral</option>
          <option value="Evento">Evento</option>
          <option value="Otros">Otros</option>
        </select>
        <input
          onChange={(e) => handleInfoReleevant(e)}
          id="pc"
          value={data.infoReleevant.pc}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Pc"
          required
        />
        <input
          onChange={(e) => handleInfoReleevant(e)}
          id="matricula"
          value={data.infoReleevant.matricula}
          className="form-control form-control-sm w-50 m-auto my-3"
          type="text"
          placeholder="Matricula"
          required
        />
        <select
          onChange={(e) => handleInfoReleevant(e)}
          id="tipoDePago"
          value={data.infoReleevant.tipoDePago}
          className="form-control form-control-sm custom-select w-50 m-auto"
          required
        >
          <option defaultValue>Tipo de pago..</option>
          <option value="Directo">Directo</option>
          <option value="Cuota">Cuota</option>
        </select>
        <textarea
          onChange={(e) => handleInfoReleevant(e)}
          id="detallesPago"
          value={data.infoReleevant.detallesPago}
          wrap="hard"
          className="form-control w-50 m-auto  my-3"
          placeholder="Detalles sobre el pago"
          rows="3"
          cols="5"
        ></textarea>
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-primary mb-5 mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnadirAlumno;
