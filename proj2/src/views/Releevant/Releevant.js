import React from "react";
import Image from "../../components/images/releevant.jpg";
import "../../style/css-releevant.css";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "../../style/css.rel.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import FooterRel from "../../components/FooterRel";

function Releevant() {
  const { expertos, alumni } = useGlobalContext();
  return (
    <div>
      <img
        className="foto-releevant"
        id="releevant"
        src={Image}
        alt="code"
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "40.85vh",
          minHeight: "30%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
      <h1 className="title-releevant text-center">
        ¿QUÉ ES <span className="releevant-title">RELEEVANT?</span>
      </h1>
      <h2 className="title-h2-releevant text-center module"></h2>
      <div className="formacion-releevant module">
        <div className="formacion-divs-releevant module">
          <h3 className="h3-releevant text-center mt-3">REVOLUCIÓN</h3>
          <h5 className="h5-releevant text-center mt-2">FORMACIÓN DIFERENTE</h5>
          <p className="p-formacion-rel">
            NUESTRA FORMACIÓN SE BASA EN CONTEXTOS REALES PARA QUE SALGAS
            PREPARAD@ AL ENTORNO LABORAL.
          </p>
        </div>
        <div className="formacion-divs-releevant module">
          <h3 className="h3-releevant text-center mt-3">TRANSFORMACIÓN</h3>
          <h5 className="h5-releevant text-center mt-2">
            PROYECTOS VANGUARDISTAS
          </h5>
          <p className="p-formacion-rel">
            ELIMINAMOS LAS BARRERAS DIGITALES PARA TU NEGOCIO Y ENCONTRAMOS
            SOLUCIONES PARA TUS CONSULTAS TECNOLÓGICAS.
          </p>
        </div>
        <div className="formacion-divs-releevant module">
          <h3 className="h3-releevant text-center mt-3">INNOVACIÓN</h3>
          <h5 className="h5-releevant text-center mt-2">TALENTO & IDEAS</h5>
          <p className="p-formacion-rel">
            NUEVOS MODELOS DE NEGOCIO. IDEAS AMBICIOSAS QUE TRANSFORMAMOS EN
            PRODUCTO, QUE BUSCAN EL FUTURO TECNOLÓGICO.
          </p>
        </div>
      </div>
      <h2 className="h2-expertos text-center module">EXPERTOS RELEEVANT</h2>
      <h5 className="h5-expertos text-center mb-5 module">
        Todo nuestro equipo de expertos cerca de tus proyectos
      </h5>

      <div className="container module">
        <div className="row justify-content-between">
          <Splide
            options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "5rem",
              autoplay: true,
            }}
          >
            {expertos.map((experto) => {
              return (
                <SplideSlide key={experto._id}>
                  <div className="col mb-5 module">
                    <div className="container-expertos module">
                      <img
                        src={experto.foto}
                        alt="Avatar"
                        className="image"
                        width={"100%"}
                      />
                      <div className="overlay">
                        <div className="text">
                          {"    "}{" "}
                          <b className="nombre-experto">{experto.nombre}</b>{" "}
                          <a
                            href="https://www.linkedin.com/company/releevant/"
                            className="icon text-reset"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin"></i>
                          </a>{" "}
                          <br />
                          <b>{experto.posicion}</b> <br />
                          {experto.bio}{" "}
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>

      <h2 className="h2-expertos text-center module">ALUMNI RELEEVANT</h2>

      <div className="container module">
        <div className="row justify-content-between module module">
          <Splide
            options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "5rem",
              autoplay: true,
            }}
          >
            {alumni.map((alumno) => {
              return (
                <SplideSlide key={alumno._id}>
                  <div className="col module">
                    <div className="card__collection clear-fix">
                      <div className="cards cards--two">
                        <img
                          src={alumno.alumno.datosPersonales.foto}
                          className="img-responsive"
                          alt="Cards"
                        />
                        <span className="cards--two__rect"></span>
                        <span className="cards--two__tri"></span>
                        <p className="nombre-alumno">
                          {alumno.alumno.datosPersonales.nombre}{" "}
                          <span className="colore-empresa">
                            {alumno.empresa}
                          </span>
                        </p>{" "}
                        <br />
                        <ul className="cards__list">
                          <li>
                            <a href={alumno.alumno.datosPersonales.LinkedIn}>
                              {" "}
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <h2 className="h2-expertos text-center module">DÓNDE ESTAMOS</h2>
      <div className="donde-estamos container module">
        <div className="row">
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.979189046157!2d-4.441873884429033!3d36.69903798108674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f77fe30405e5%3A0xb44f7091e40acc9e!2sPolo%20Contenidos%20Digitales%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1651349498603!5m2!1ses!2ses"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
              alt="map"
              title="map"
            ></iframe>
          </div>
          <div className="col">
            <img
              src="https://static2.diariosur.es/www/multimedia/202110/18/media/cortadas/SF0X90R1-RvDiW34u4FV9FwpRb3gtXwJ-1248x770@Diario%20Sur.jpg"
              alt="polo"
              width={"100%"}
              height={"auto"}
            />
          </div>
        </div>
      </div>
      <FooterRel />
    </div>
  );
}

export default Releevant;
