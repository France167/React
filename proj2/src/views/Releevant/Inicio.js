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
          top: "400px",
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
          <p className="p-formacion">
            Nuestro equipo no son docentes al uso, son programadores en activo
            del sector, que acumulan muchos años de experiencia y compaginan su
            trabajo con la docencia. Sólo de esta forma tendrás asegurada la
            formación real, como se trabaja en la compañías de software hoy en
            día.
          </p>
        </div>
        <div>
          <h3 className="h3 text-center">Tú eres único</h3>
          <p className="p-formacion">
            Sabemos que cada persona tiene un nivel de conocimientos o una
            destreza particular. Si vienes desde cero, o tienes ya una
            experiencia en el sector de la programación, nuestra metodología nos
            permite extender el aprendizaje adaptándonos a ti, a tu nivel y tus
            habilidades.
          </p>
        </div>
      </div>
      <div className="formacion">
        <div>
          <h3 className="text-center">Presencialidad</h3>
          <p className="p-formacion">
            Creemos en la presencialidad. El streaming fue imprescindible en lo
            más duro de la pandemia, pero la vuelta a la normalidad ya está
            aquí. El contacto real con los profesores es la mejor forma de
            aprender, y así lo demuestran nuestros resultados. Tendrás en todo
            momento una persona a tu lado para resolver tus dudas.
          </p>
        </div>
        <div>
          <h3 className="text-center">Empleabilidad</h3>
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
      <h2 className="h2-curso text-center">LOS BOOTCAMPS RELEEVANT</h2>
      <h5 className="h5-curso text-center mb-5">
        Las últimas tecnologías te acompañan
      </h5>
      <div className="container-bootcamp">
        <div className="box">
          <span></span>
          <div className="content">
            <h2 className="">DESARROLLO WEB</h2>
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
            <a href="#">Saber más</a>
          </div>
        </div>
        <div className="box">
          <span></span>
          <div class="content">
            <h2>JAVA Y ANGLULAR</h2>
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
            <a href="#">En desarrollo</a>
          </div>
        </div>
        <div class="box">
          <span></span>
          <div class="content">
            <h2>INTELIGENCIA ARTIFICIAL</h2>
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
            <a href="#">En desarrollo</a>
          </div>
        </div>
      </div>
      <h2 className="h2-carousel text-center">EL ESPACIO RELEEVANT</h2>
      <h5 className="h5-curso text-center mb-5">
      Las mejores instalaciones para nuestros alumnos y nuestra comunidad
      </h5>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="700">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/12/web3-2048x1181.jpg"
              class="d-block w-50 m-auto"
              alt="..."
              width={"20%"}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/12/IMG_20211129_194754-2048x1152.jpg"
              class="d-block w-50 m-auto"
              alt="..."
              width={"20%"}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_115930-2048x1152.jpg"
              class="d-block w-50 m-auto"
              alt="..."
              width={"20%"}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_120213-2048x1152.jpg"
              class="d-block w-50 m-auto"
              alt="..."
              width={"20%"}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/IMG_20210726_115812-2048x1152.jpg"
              class="d-block w-50 m-auto"
              alt="..."
              width={"20%"}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        > 
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Inicio;
