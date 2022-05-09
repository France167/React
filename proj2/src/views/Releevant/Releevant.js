import React from "react";
import Image from "../../components/images/releevant.jpg";
import "../../style/css-releevant.css";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "../../style/css.rel.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { HashLink } from "react-router-hash-link";

function Releevant() {
  const { expertos, alumni } = useGlobalContext();
  return (
    <div>
      <img
        className="foto-releevant"
        id="releevant"
        src={Image}
        alt="code"
        width={"100%"}
      />
      <h1 className="title-releevant text-center">
        ¿QUÉ ES <span className="releevant-title">RELEEVANT?</span>
      </h1>
      {<h2 className="title-h2-releevant text-center module"></h2>}
      <div className="container-cursos module">
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">BOOTCAMP DE DESARROLLO WEB</h2>
            <p>
              Bootcamp de 500 horas donde aprenderás a programar Javascript,
              Typescript y Node.js, MySQL, MongoDB, React.js, SCRUM... Te
              preparamos para trabajar.
            </p>
            <HashLink to="/curso-desarrollo/#foto-cursoweb">Saber más</HashLink>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">DESARROLLO DE SOFTWARE </h2>
            <p>
              En este bootcamp te enseñamos el stack J.A.M (Java, Angular y
              MongoDB), además del framework Spring, metodologías Agile y mucho
              más. La mayor demanda laboral IT.
            </p>
            <HashLink to="/desarrollo/#desarrollo">Saber más</HashLink>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">STARTUPS</h2>
            <p>
              Este bootcamp de Inteligencia Artificial le dará otro nivel a tu
              carrera profesional. Aprenderás Python, TensorFlow, Torch y mucho
              más. ¡Únete ahora al futuro de la tecnología!
            </p>
            <HashLink to="/startups/#startup">Saber más</HashLink>
          </div>
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
              breakpoints: {
                700: {
                  perPage: 1,
                },
              },
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
              breakpoints: {
                700: {
                  perPage: 1,
                },
              },
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                className="bi bi-linkedin"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                              </svg>
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
        <div className="map-row row">
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
    </div>
  );
}

export default Releevant;
