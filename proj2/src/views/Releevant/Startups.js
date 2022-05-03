import React from "react";
import FooterRel from "../../components/FooterRel";
import Image from "../../components/images/startups.jpg";
import "../../style/css-startups.css";

function Startups() {
  return (
    <div>
      <img
        className="foto-startups"
        id="startup"
        src={Image}
        alt="code"
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "48vh",
          minHeight: "30%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
      <h1 className="title-startups text-center">
        <span className="lanzamos">LANZAMOS</span> TU STARTUP
      </h1>
      <h2 className="title-h2-startups text-center module">
        TE AYUDAMOS CON NUESTRA EXPERIENCIA
      </h2>
      <p className="p-rel-startups module">
        En Releevant apoyamos tu genial talento o tu{" "}
        <b>startup con ideas brillantes</b>, y transformamos tus proyectos en{" "}
        <b>negocios rentables e innovadores</b>. No te preocupes por la{" "}
        <b>financiación</b> y desarrollo, déjalo en nuestras manos.
      </p>
      <div className="formacion-startups module">
        <div className="formacion-divs-startups module">
          <h3 className="h3-startups text-center mt-3">
            Confianza en tus ideas
          </h3>
          <p className="p-formacion-startups">
            Tenemos <b>con nosotros</b> inversores para propulsar startups
            originales y con ideas innovadoras. Queremos darte ese impulso para
            hacer real tu proyecto.
          </p>
        </div>
        <div className="formacion-divs-startups module">
          <h3 className="h3-startups text-center mt-3">
            Contacto con nuestros partners
          </h3>
          <p className="p-formacion-startups">
            Nuestra <b>red de partners</b> lanza tu startup al siguiente nivel.
            Aportan los recursos que necesitas, además de asesoramiento,
            mentorización y viabilidad a tu proyecto.
          </p>
        </div>
        <div className="formacion-divs-startups module">
          <h3 className="h3-startups text-center mt-3">
            Ayuda con el desarrollo
          </h3>

          <p className="p-formacion-startups">
            Si no tienes un equipo de desarrollo no te preocupes. Puedes tener
            <b> nuestro equipo de profesionales</b> para hacer que tu idea sea
            una realidad.
          </p>
        </div>
      </div>
      <div className="startups-section module">
        <div className="section-one module">
          <h2 className="title-section">ACOMPAÑAMIENTO</h2>
          <p className="p-section">
            El apoyo a una startup no puede ser un acontecimiento aislado, con
            una formación/monitorización de 3 o 6 meses, tras lo cual el
            proyecto se abandona a su suerte. Debe ser un proceso de
            acompañamiento continuo, un asesoramiento especializado que permita
            profesionalizar la toma de decisiones en esas primeras etapas del
            proyecto.
          </p>
          <p className="p-section">
            {" "}
            Ponemos el foco en la creación de valor por parte de la startup para
            su cliente final, sea este B2B ó B2C. La creación y testeo de un MPV
            es vital en las primeras fases del proyecto.
          </p>
        </div>
        <div className="section-one module">
          <h2 className="title-section">VALIDACIÓN & INVERSIÓN</h2>
          <p className="p-section">
            Cuando estamos validando el modelo de negocio y obteniendo feedback
            del mercado, es cuando podemos incorporar inversores o buscar la
            financiación necesaria que nos permita escalarlo, y no al contrario.
          </p>
          <p className="p-section">
            Si estás inmerso en la enorme aventura de crear un nuevo proyecto, o
            has lanzado una startup y necesitas apoyo para escalarla y verla
            crecer, necesitas el apoyo y acompañamiento de un grupo de
            profesionales experimentado en todas las áreas estratégicas de una
            compañía.
          </p>
        </div>
      </div>
      <h2 className="h2-startups text-center module">
        SI TIENES UNA STARTUP CON POTENCIAL DE SUBIR AL SIGUIENTE NIVEL,
        HABLEMOS.
      </h2>
      <div className="form-startups mb-5 module">
        <h5 className="h5-startups text-center my-5">
          ¡No lo dudes y contáctanos!
        </h5>

        <form className="">
          <input
            id="nombre"
            className="form-control form-control-sm w-50 m-auto my-3"
            type="text"
            placeholder="Nombre Completo"
            required
          />
          <input
            id="nombre"
            className="form-control form-control-sm w-50 m-auto my-3"
            type="email"
            placeholder="Correo Eletronico"
            required
          />
          <input
            id="nombre"
            className="form-control form-control-sm w-50 m-auto my-3"
            type="text"
            placeholder="Numero de telefono"
            required
          />
          <div className="w-50 m-auto">
            <textarea
              id="fechaFalta"
              wrap="hard"
              className="form-control w-100 m-auto  my-3"
              placeholder="¡¡Quiero hablar con vosotros!!"
              rows="3"
              cols="5"
            ></textarea>
          </div>
          <div className="d-grid gap-2 col-2 mx-auto">
            <button className="btn btn-secondary mb-5 mt-3" type="submit">
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
      <FooterRel />
    </div>
  );
}

export default Startups;
