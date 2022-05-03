import React from "react";
import Powerslap from "../../components/video/video.mp4";
import FooterRel from "../../components/FooterRel";
import "../../style/css-inicio.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Inicio() {
  return (
    <div>
      <video
        className="videoInicio"
        id="video-inicio"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50vh",
          minHeight: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      >
        <source src={Powerslap} type="video/mp4" />
      </video>
      <h1 className="title text-center">CAMBIA TU FUTURO</h1>
      <p className="p-title-inicio text-center">
        ¿Quieres dar un cambio a tu carrera profesional? En Releevant tienes esa
        oportunidad. Te ayudamos a introducirte en el mundo de la programación.
        Te preparamos para comenzar a trabajar en el sector tecnológico.
      </p>
      <h2 className="title-h2 text-center module">
        RELEEVANT CAMBIA EL MUNDO DE LA FORMACIÓN: SOMOS PROGRAMADORES, TE
        ENSEÑAMOS A PROGRAMAR.
      </h2>
      <div className="formacion module">
        <div className="formacion-divs module">
          <h3 className="h3 text-center mt-3">Profesionales</h3>
          <p className="p-formacion">
            Nuestro equipo no son docentes al uso, son programadores en activo
            del sector, que acumulan muchos años de experiencia y compaginan su
            trabajo con la docencia. Sólo de esta forma tendrás asegurada la
            formación real, como se trabaja en la compañías de software hoy en
            día.
          </p>
        </div>
        <div className="formacion-divs module">
          <h3 className="h3 text-center mt-3">Tú eres único</h3>
          <p className="p-formacion">
            Sabemos que cada persona tiene un nivel de conocimientos o una
            destreza particular. Si vienes desde cero, o tienes ya una
            experiencia en el sector de la programación, nuestra metodología nos
            permite extender el aprendizaje adaptándonos a ti, a tu nivel y tus
            habilidades.
          </p>
        </div>
      </div>
      <div className="formacion module">
        <div className="formacion-divs module">
          <h3 className="h3 text-center mt-3">Presencialidad</h3>
          <p className="p-formacion">
            Creemos en la presencialidad. El streaming fue imprescindible en lo
            más duro de la pandemia, pero la vuelta a la normalidad ya está
            aquí. El contacto real con los profesores es la mejor forma de
            aprender, y así lo demuestran nuestros resultados. Tendrás en todo
            momento una persona a tu lado para resolver tus dudas.
          </p>
        </div>
        <div className="formacion-divs module">
          <h3 className="h3 text-center mt-3">Empleabilidad</h3>
          <p className="p-formacion">
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
      <h2 className="h2-curso text-center module">LOS BOOTCAMPS RELEEVANT</h2>
      <h5 className="h5-curso text-center mb-5 module">
        Las últimas tecnologías te acompañan
      </h5>
      <div className="container-bootcamp module">
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">DESARROLLO WEB</h2>
            <p>
              Con este Bootcamp serás capaz de aprender y desarrollar tus
              habilidades como programador web desde cero hasta poder tener la
              oportunidad de trabajar en el sector. Son más de 500 horas, en las
              que, de forma totalmente práctica, aprenderás a programar,
              maquetar, gestionar bases de datos y servidores. Dominarás
              lenguajes como Javascript, Typescript y Node.js. Sabrás manejar
              librerías como React.js, y aprenderás metodologías Agile como
              SCRUM. También te asesoraremos y acompañaremos en tu primer
              trabajo como Programador Junior.
            </p>
            <HashLink to="/curso-desarrollo/#foto-cursoweb">Saber más</HashLink>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">JAVA Y ANGLULAR</h2>
            <p>
              En este Bootcamp de Java y Angular te enseñaremos el stack J.A.M
              (Java, Angular y MongoDB), perfil es muy demandado por las
              empresas en España. Por eso hemos creado un curso específico para
              ti, que buscas entrar en el mundo tecnológico con un perfil
              atractivo para las compañías. Empezarás aprendiendo Java desde
              cero, con HTML y CSS como apoyo visual, y seguirás con el
              framework Spring, bases de datos relacionales y no relacionales,
              para acabar aprendiendo Angular y diseñando tu proyecto final.
            </p>
            <HashLink to="/curso-desarrollo/#foto-cursoweb">
              En desarrollo
            </HashLink>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="h2-title-curso">INTELIGENCIA ARTIFICIAL</h2>
            <p>
              Nuestro Bootcamp de Inteligencia Artificial te ofrece una visión
              inicial -pero detallada- sobre el uso de la IA en la gestión de
              organizaciones, desarrollo de herramientas de analítica de datos y
              predicción de resultados. Adquirirás habilidades analíticas y de
              gestión de datos, necesarios en una industria que tiene una gran
              demanda de perfiles IA, y que se encuentra inmersa en una
              transformación en la que la Inteligencia Artificial. Aprenderás
              Python, Tensorflow y muchos lenguajes más. ¿A qué esperas para
              unirte al futuro de la tecnología?
            </p>
            <HashLink to="/curso-desarrollo/#foto-cursoweb">
              En desarrollo
            </HashLink>
          </div>
        </div>
      </div>
      <h2 className="h2-carousel text-center module">EL ESPACIO RELEEVANT</h2>
      <h5 className="h5-curso text-center mb-5 module">
        Las mejores instalaciones para nuestros alumnos y nuestra comunidad
      </h5>
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide module"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/12/web3-2048x1181.jpg"
              className="d-block w-50 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/12/IMG_20211129_194754-2048x1152.jpg"
              className="d-block w-50 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_115930-2048x1152.jpg"
              className="d-block w-50 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_120213-2048x1152.jpg"
              className="d-block w-50 m-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_115812-2048x1152.jpg"
              className="d-block w-50 m-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h2 className="h2-compania-inicio text-center module">
        COMPAÑÍAS QUE HAN CONFIADO EN NOSOTROS
      </h2>
      <h5 className="h5-curso text-center mb-5 module">
        Tenemos la confianza de muchas compañías con las que han trabajado
        nuestros equipos
      </h5>
      <div className="container mt-5 module">
        <div className="row">
          <div className="col d-flex justify-content-evenly">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/tel-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/minis-ind-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/lot-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/com-madrid-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/Logo_Caja_Rural-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/bank-300x279.png"
              alt="companies"
              width={"10%"}
            />
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/aepd-logo-300x279.png"
              alt="companies"
              width={"10%"}
            />
          </div>
        </div>
      </div>
      <h2 className="h2-compania-inicio text-center module">
        ¿QUIERES MÁS INFORMACIÓN DEL BOOTCAMP DE DESARROLLO WEB DE RELEEVANT?
      </h2>
      <div className="form-inicio mb-5 module">
        <h5 className="h5-curso text-center my-5">
          ¡Escríbenos y te llamamos!
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
              placeholder="Quiero más información acerca de vuestros bootcamps."
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

export default Inicio;
