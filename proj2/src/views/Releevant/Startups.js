import React, { useState, useEffect } from "react";
import FooterRel from "../../components/FooterRel";
import Image from "../../components/images/startups.jpg";
import "../../style/css-startups.css";
import emailjs from "emailjs-com";

function Startups() {
  const initialValues = { nombre: "", email: "", telefono: "", info: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validado = validate(formValues);
    setFormErrors(validate(formValues));
    if (Object.keys(validado).length === 0) {
      setIsSubmit(true);
      setFormValues(initialValues);
      emailjs
        .sendForm(
          "service_miiwiqw",
          "template_m5k9cvi",
          e.target,
          "KzzPds4TVC6qE0l-e"
        )
        .then((res) => {
          console.log(res);
        });
    } else {
      setFormErrors(validate(formValues));
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regexPhone =
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const regex = /^[^\s@]+@[^\s@].[^\s@]{2,}$/i;
    if (!values.nombre) {
      errors.nombre = "Introducir un nombre!";
    }
    if (!values.email) {
      errors.email = "Introducir un correo eletrónico!";
    } else if (!regex.test(values.email)) {
      errors.email = "Introducir un correo eletrónico!";
    }
    if (!values.info) {
      errors.info = "Introducir info!";
    }
    if (!values.telefono) {
      errors.telefono = "Introducir un numero de telefono!";
    } else if (
      !regexPhone.test(values.telefono) ||
      values.telefono.length < 9
    ) {
      errors.telefono = "Introducir un numero de telefono valido!";
    }
    return errors;
  };
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
      <div className="form-cont">
        <h2 className="h2-compania-inicio text-center module" id="form-inicio">
          ¿QUIERES MÁS INFORMACIÓN?
        </h2>
        <div className="form-inicio mb-5 module">
          <h5 className="h5-curso text-center my-5">
            ¡Rellena nuestro formulario y la obtendrás!
          </h5>

          <form onSubmit={handleSubmit}>
            <input
              id="nombre"
              name="nombre"
              className="form-control form-control-sm w-50 m-auto my-3"
              type="text"
              onChange={handleChange}
              placeholder="Nombre y apellido"
              value={formValues.nombre}
              required
            />
            <p className="error">{formErrors.nombre}</p>
            <input
              id="email"
              name="email"
              className="form-control form-control-sm w-50 m-auto my-3"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Correo eletrónico"
              required
            />
            <p className="error">{formErrors.email}</p>
            <input
              id="telefono"
              name="telefono"
              className="form-control form-control-sm w-50 m-auto my-3"
              type="text"
              value={formValues.telefono}
              onChange={handleChange}
              placeholder="Móvil de contacto"
              required
            />
            <p className="error">{formErrors.telefono}</p>
            <div className="w-50 m-auto">
              <textarea
                id="info"
                name="info"
                wrap="hard"
                className="form-control w-100 m-auto  my-3"
                value={formValues.info}
                onChange={handleChange}
                placeholder="Quiero más información sobre Releevant."
                rows="3"
                cols="5"
              ></textarea>
              <p className="error">{formErrors.info}</p>
            </div>
            {Object.keys(formErrors).length === 0 && isSubmit && (
              <div className="correct">
                Su formulario se ha envíado correctamente!
              </div>
            )}
            <div className="d-grid gap-2 col-2 mx-auto">
              <button className="btn btn-secondary mb-5 mt-3" type="submit">
                MÁS INFO!{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Startups;
