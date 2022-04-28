import React from "react";
import Powerslap from "../../components/video/video.mp4";

function Inicio() {
  return (
    <div>
      <video
        className="videoInicio"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "300px",
          minHeight: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%",
          zIndex: -1,
        }}
      >
        <source src={Powerslap} type="video/mp4" />
      </video>
      <h1 className="title text-center">CAMBIA TU FUTURO</h1>
      <p className="p-title text-center">
        ¿Quieres dar un cambio a tu carrera profesional? En Releevant tienes esa
        oportunidad. Te ayudamos a introducirte en el mundo de la programación.
        Te preparamos para comenzar a trabajar en el sector tecnológico.
      </p>
      <h2 className="title-h2 text-center">
        SOMOS PROGRAMADORES, TE ENSEÑAMOS A PROGRAMAR.
      </h2>
      <div className="formacion">
        <div>
          <h3 className="text-center">Profesionales</h3>
          <p className="p-formacion mx-2  mt-3">
            Nuestro equipo no son docentes al uso, son programadores en activo
            del sector, que acumulan muchos años de experiencia y compaginan su
            trabajo con la docencia. Sólo de esta forma tendrás asegurada la
            formación real, como se trabaja en la compañías de software hoy en
            día.
          </p>
        </div>
        <div>
          <h3 className="h3 text-center">Tú eres único</h3>
          <p className="p-formacion mx-2 mt-3">
            Sabemos que cada persona tiene un nivel de conocimientos o una
            destreza particular. Si vienes desde cero, o tienes ya una
            experiencia en el sector de la programación, nuestra metodología nos
            permite extender el aprendizaje adaptándonos a ti, a tu nivel y tus
            habilidades.
          </p>
        </div>
        <div>
          <h3 className="text-center">Presencialidad</h3>
          <p className="p-formacion mx-2  mt-3">
            Creemos en la presencialidad. El streaming fue imprescindible en lo
            más duro de la pandemia, pero la vuelta a la normalidad ya está
            aquí. El contacto real con los profesores es la mejor forma de
            aprender, y así lo demuestran nuestros resultados. Tendrás en todo
            momento una persona a tu lado para resolver tus dudas.
          </p>
        </div>
        <div>
          <h3 className="text-center">Empleabilidad</h3>
          <p className="p-formacion mx-2  mt-3">
            Terminarás tu formación con unos conocimientos sólidos y
            actualizados, y estarás en disposición de empezar a trabajar como
            desarrollador junior. Te acompañamos en tu camino, no sólo
            introduciéndote en el sector a través de nuestros eventos
            profesionales, sino que accederás a nuestra red de empresas
            partners, que seguirán tu evolución y progresos y asistirán a la
            presentación de tu proyecto final.
          </p>
        </div>
      </div>
      <h2 className="h2-curso text-center mb-5">LOS BOOTCAMPS RELEEVANT</h2>
      <h5 className="h5-curso text-center mb-5">
        Las últimas tecnologías te acompañan
      </h5>
      <div className="container">
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="">BOOTCAMP DE DESARROLLO WEB</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div class="content">
            <h2>Card two</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="box">
          <span></span>
          <div class="content">
            <h2>Card Three</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
