import React from "react";
import Image from "../../components/images/curso-des1.jpg";
import "../../style/css-cursoweb.css";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import FooterRel from "../../components/FooterRel";
import { HashLink } from "react-router-hash-link";

function CorsoWeb() {
  const { docentes } = useGlobalContext();
  return (
    <div>
      <img
        className="foto-cursoweb"
        id="foto-cursoweb"
        src={Image}
        alt="code"
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "46vh",
          minHeight: "30%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
      <h1 className="title-cursoweb text-center">BOOTCAMP DESARROLLO WEB</h1>
      <p className="p-title-cursoweb text-center">
        Si buscas cómo aprender a programar desde cero, o qué estudiar para ser
        programador, Releevant te trae los mejores bootcamps para que estudiar
        programación sea tu futuro. Tenemos bootcamps de Desarrollo web,
        Inteligencia artificial, Java y… viene mucho más! ¡No esperes más y
        únete a la familia Releevant!
      </p>
      <h2 className="title-h2-cursoweb text-center module">
        ¿CÓMO VA A SER MI CAMINO POR RELEEVANT?
      </h2>
      <div className="etapas module">
        <div className="row">
          <div className="col-2">
            <div className="list-group" id="list-tab" role="tablist">
              <a
                className="title-cursow list-group-item list-group-item-action active"
                id="list-home-list"
                data-bs-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="list-home"
              >
                ETAPA 1
              </a>
              <a
                className="title-cursow list-group-item list-group-item-action"
                id="list-profile-list"
                data-bs-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="list-profile"
              >
                ETAPA 2
              </a>
              <a
                className="title-cursow list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="list-messages"
              >
                ETAPA 3
              </a>
              <a
                className="title-cursow list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="list-settings"
              >
                ETAPA 4
              </a>
            </div>
          </div>
          <div className="col-10">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list"
              >
                <h3 className="h3-web">MAQUETACIÓN Y BASES DE PROGRAMACIÓN</h3>
                <div className="progress my-3">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="p-web">
                  En esta etapa aprenderás los conceptos más básicos de la
                  programación web. Empezaremos con{" "}
                  <b>HTML, CSS, SASS y SCSS</b>, junto con{" "}
                  <b>diseños responsive, Flexbox y Bootstrap</b>. Todo ello para
                  tener unas bases sólidas de maquetación web. Una vez tengamos
                  el “esqueleto” de la web hecho, habrá que darle
                  funcionalidades. Es ahí cuando entra <b>Javascript</b>.
                  Aprenderemos a manipular el DOM, es decir, darle vida a las
                  webs en todos los sentidos. Asentaremos los conceptos
                  iniciales que iremos completando en el resto de etapas.
                  También te familiarizarás con el <b>control de versiones</b>.
                </p>
                <p className="p-web">
                  Para finalizar, harás tu <b>primer proyecto</b>, para asegurar
                  y afianzar los conocimientos de los lenguajes que has
                  aprendido. Pero eso no es todo, ¡hay más! →
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list"
              >
                <h3 className="h3-web">BACK-END Y PROGRAMACIÓN AVANZADA</h3>
                <div className="progress my-3">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="p-web">
                  En la segunda etapa de este bootcamp nos metemos de lleno en
                  la parte más abstracta de la programación: el <b>back-end</b>.
                  Aprenderás conceptos como <b>MVC</b>{" "}
                  (modelo-vista-controlador) y crearás tu propio servidor de la
                  mano de <b>Node.js y ExpressJS</b>. Empezarás a tratar y
                  manejar bases de datos de la mano de
                  <b>MySQL</b> y <b>MongoDB</b>, aprenderás las diferencias
                  entre ellas y te meterás de lleno en el mundo de las
                  solicitudes <b>HTTP</b> y las
                  <b>API</b>. También entrarás en el mundo de algunas de las
                  tecnologías más punteras actualmente, como <b>AWS y Docker</b>
                  .
                </p>
                <p className="p-web">
                  Para finalizar, harás tu <b>segundo proyecto</b>, esta vez
                  para combinar todo lo que has aprendido en las dos etapas.
                  Podrás
                  <b>crear una </b>web básica, tanto con su <b>front-end</b>{" "}
                  como con su
                  <b>back-end</b>, en la que podrás guardar, enviar, modificar y
                  eliminar datos. Además, te ayudará a afianzar todavía más tus
                  conocimientos para avanzar hacia tu último reto. →
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
              >
                <h3 className="h3-web">FRONT-END: REACT</h3>
                <div className="progress my-3">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="p-web">
                  Esta va a ser la etapa del bootcamp más intensa. Pondrás a
                  prueba todos los conocimientos adquiridos hasta ahora, y
                  aprenderás la{" "}
                  <b>librería de front-end más potente del mercado: React</b>.
                  Desarrollado por <b>Facebook</b>, es uno de los lenguajes más
                  demandados actualmente en el sector tecnológico. Aprenderás
                  conceptos como <b>SPA</b> (Single Page Application) y la
                  arquitectura basada en componentes se convertirá en algo
                  habitual para ti.
                </p>
                <p className="p-web">
                  Aparte de esto, aprenderás conocimientos de <b>SCRUM</b>, para
                  saber cómo organizan y estructuran los proyectos las mejores
                  empresas; sabrás todos los pasos para{" "}
                  <b>organizar y crear un proyecto real</b>, y lograrás tener
                  una base sólida de los conceptos de <b>UI</b> (User Interface)
                  y <b>UX</b> (User Experience).
                </p>
                <p className="p-web">
                  En este momento ya estarás listo para… ¡enfrentarte al
                  <b>proyecto final</b>! Unirás todo lo aprendido en estas
                  etapas, y como resultado{" "}
                  <b>crearás una auténtica aplicación full-stack</b>. Pondrás a
                  prueba tus conocimientos en front-end con React y la
                  maquetación, y tus conocimientos en back-end con las bases de
                  datos y Node.js. Además,{" "}
                  <b>
                    este proyecto final será expuesto a las empresas que te
                    contratarán
                  </b>
                  . Pero… ¡eso te lo contamos en la siguiente etapa! →
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
              >
                <h3 className="h3-web">¡HIRING WEEK!</h3>
                <div className="progress my-3">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="p-web">
                  Esta es la última etapa del bootcamp de desarrollo web. ¡Aquí
                  ya serás todo un{" "}
                  <b>
                    <i>Full Stack Web Developer</i>
                  </b>
                  ! En ella tendrás charlas de empresas y profesionales que
                  vendrán a <b>reclutar</b> a los alumnos del bootcamp. También
                  habrá <b>visitas a empresas</b>, para que conozcas de primera
                  mano cómo funcionan por dentro. Por último, presentarás tu
                  proyecto final ante{" "}
                  <b>múltiples empresas del sector tecnológico</b>. ¡El trabajo
                  estará hecho! En este momento estarás listo para optar a
                  muchos puestos de trabajo en el sector.
                </p>
                <p className="p-web">
                  <b>Releevant te acompañará y asesorará</b> sobre cómo hacer
                  las entrevistas, información relevante sobre ellas, y mediará
                  para que los procesos para que encuentres trabajo sean los mas
                  cortos posibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="h2-docentes text-center module">
        TUS PROFESORES DE DESARROLLO WEB EN RELEEVANT
      </h2>
      <div className="container module">
        <div className="row justify-content-between">
          <Splide
            options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {docentes.map((docente) => {
              return (
                <SplideSlide key={docente._id}>
                  <div className="col mb-5 module">
                    <div className="container-docentes module">
                      <img
                        src={docente.foto}
                        alt="Avatar"
                        className="image-web"
                        width={"100%"}
                      />
                      <div className="overlay-web">
                        <div className="text-web">
                          {"    "}{" "}
                          <b className="nombre-docente">{docente.nombre}</b>{" "}
                          <a
                            href="https://www.linkedin.com/company/releevant/"
                            className="icon text-reset"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin"></i>
                          </a>{" "}
                          <br />
                          <b>{docente.posicion}</b> <br />
                          {docente.bio}{" "}
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
      <h2 className="h2-cursoweb text-center module">
        ¿A QUIÉN VA DIRIGIDO ESTE BOOTCAMP DE DESARROLLO WEB?
      </h2>
      <div className="formacion-bootcamp module">
        <div className="formacion-divs-bootcamp module">
          <h3 className="h3-bootcamp text-center mt-3">
            SI TE HAS GRADUADO RECIENTEMENTE
          </h3>
          <p className="p-formacion-bootcamp">
            Si te acabas de graduar en FP o en la universidad, este{" "}
            <b>bootcamp de programación</b> orientado a desarrollo web te
            proporcionará las habilidades imprescindibles para poder iniciar tu
            propia carrera como{" "}
            <b>
              <i>Full Stack Web Developer</i>
            </b>
            , o como programador.
          </p>
        </div>
        <div className="formacion-divs-bootcamp module">
          <h3 className="h3-bootcamp text-center mt-3">
            BUSCAS IMPULSAR TU CARRERA
          </h3>
          <p className="p-formacion-bootcamp">
            Este <b>bootcamp de programación en Málaga</b> complementará los
            conocimientos que ya tienes adquiridos, podrás optar a perfiles o
            roles más técnicos, además tendrás una perspectiva más enfocada a
            las últimas tecnologías.
          </p>
        </div>
      </div>
      <div className="formacion-bootcamp module">
        <div className="formacion-divs-bootcamp module">
          <h3 className="h3-bootcamp text-center mt-3">
            SI BUSCAS UN CAMBIO DE VIDA LABORAL
          </h3>
          <p className="p-formacion-bootcamp">
            Este <b>bootcamp de programación para desarrollo web</b> es perfecto
            para alguien que está buscando entrar en el sector tecnológico. Te
            ayudará a conseguir los conocimientos necesarios para poder
            conseguir trabajo como desarrollador junior.
          </p>
        </div>
        <div className="formacion-divs-bootcamp module">
          <h3 className="h3-bootcamp text-center mt-3">
            … O CUALQUIER TIPO DE PERSONA
          </h3>
          <p className="p-formacion-bootcamp">
            En realidad, para iniciarte en el mundo tecnológico y llegar a ser
            un{" "}
            <b>
              <i>Full Stack Web Developer</i>
            </b>{" "}
            no necesitas ninguna característica en especial. Trabajes en lo que
            trabajes, seas como seas, si tienes iniciativa, actitud y ganas de
            aprender, conseguirás entrar en el sector IT.
          </p>
        </div>
      </div>
      <div className="section-dos">
        <h2 className="h2-cursoweb-sec text-center module">
          ¿POR QUÉ ESTUDIAR ESTE BOOTCAMP DE DESARROLLO WEB EN MÁLAGA?
        </h2>
        <div className="formacion-bootcamp module">
          <div className="formacion-divs-sec module">
            <h3 className="h3-sec text-center mt-3">
              APRENDERÁS LAS TECNOLOGÍAS MÁS VALORADAS
            </h3>
            <p className="p-formacion-sec">
              Hemos diseñado un temario para que aprendas desde cero las
              tecnologías que más demandadas las empresas. Con tus conocimientos
              en HTML, CSS, Javascript, Node.js, MySQL, MongoDB, Git, GitHub,
              React y SCRUM, serás un desarrollador{" "}
              <b>
                <i>Full Stack Web Developer</i>
              </b>{" "}
              muy atractivo para las empresas. Recuerda, en el sector IT hay una
              enorme demanda.
            </p>
          </div>
          <div className="formacion-divs-sec module">
            <h3 className="h3-sec text-center mt-3">
              DESARROLLARÁS TUS SOFT-SKILLS
            </h3>
            <p className="p-formacion-sec">
              La programación es importante, pero también las empresas valoran
              mucho las llamadas <i>soft-skills</i>. Por eso en Releevant,
              dentro de
              <b>nuestro bootcamp de programación en Málaga</b>, te ayudamos a
              desarrollar tu trabajo en equipo, tu comunicación en un entorno de
              trabajo, tu capacidad para realizar proyectos complejos en tiempo
              y de la forma adecuada, y mucho más.
            </p>
          </div>
        </div>
        <div className="formacion-bootcamp module">
          <div className="formacion-divs-sec module">
            <h3 className="h3-sec text-center mt-3">
              LA MEJOR METODOLOGÍA PARA APRENDER
            </h3>
            <p className="p-formacion-sec">
              Desde nuestra experiencia, la mejor forma de aprender programación
              es… programando. Parece evidente, pero no suele ser como se hacen
              las cosas. En Releevant presentamos una experiencia muy práctica
              con este <b>bootcamp de programación</b>, haciendo que el alumno
              realice proyectos por él mismo, sin olvidar el justo equilibrio
              con las bases de la teoría y los fundamentos de la programación.
            </p>
          </div>
          <div className="formacion-divs-sec module">
            <h3 className="h3-sec text-center mt-3">
              PERTENECERÁS A LA FAMILIA RELEEVANT
            </h3>
            <p className="p-formacion-sec">
              Tenemos una gran comunidad de desarrolladores del sector dispuesta
              a acogerte con los brazos abiertos. Además del{" "}
              <b>bootcamp de programación en Málaga</b>, con nosotros también
              tendrás accceso a los meetups, masterclassName y eventos.
              Releevant es mucho más que un sitio para formarte. Te sentirás
              desde el primer día dentro del sector tecnológico, y te integrarás
              en el entorno con nosotros.
            </p>
          </div>
        </div>
      </div>
      <h2 id="financiacion" className="h2-financiacion text-center module">
        OPCIONES DE FINANCIACIÓN Y BECAS
      </h2>
      <div className="container module">
        <div className="row my-5">
          <div className="col-4 module">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/Calendario-e1629179966774.png"
              alt="calendar"
              width={"25%"}
              className="rounded mx-auto d-block mb-5"
            />
            <p className="p-financiacion">
              Puedes pagar el Bootcamp con Releevant en 5 meses,{" "}
              <b>sin intereses, sin trampas y sin letra pequeña</b>.
            </p>
          </div>
          <div className="col-4 module">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/Cerdito-e1629179987717.png"
              alt="cerdito"
              width={"25%"}
              className="rounded mx-auto d-block mb-5"
            />
            <p className="p-financiacion">
              Con nosotros tienes a tu disposición un{" "}
              <b>préstamo de estudios</b> con unas condiciones muy ventajosas.
            </p>
          </div>
          <div className="col-4 module">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/Becas-e1629179983960.png"
              alt="beca"
              width={"25%"}
              className="rounded mx-auto d-block mb-5"
            />
            <p className="p-financiacion">
              Tenemos <b>becas</b> para apoyar la inserción de las{" "}
              <b>mujeres</b> en el mundo tecnológico. ¡Pregúntanos!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col my-5 module">
            <h4 className="h4-fin mb-3">
              CONSTRUYE TU FUTURO CON LA FINANCIACIÓN QUE NECESITAS
            </h4>
            <p className="p-financiacion">
              Hemos diseñado un plan de financiación junto a Unicaja Banco
              exclusivo para los alumnos de Releevant. Con este plan podrás
              empezar a pagar el <b>Bootcamp de Málaga</b> hasta{" "}
              <b>un año después de haber comenzado</b>. Además,{" "}
              <b>no hay restricciones de edad</b>, y podrás pagar{" "}
              <b>hasta en cinco años</b>.
            </p>
          </div>
          <div className="col my-5 module">
            <img
              src="https://www.releevant.com/wp-content/uploads/2021/08/LOGO-UNICAJABANCO.png"
              alt="beca"
              width={"100%"}
            />
          </div>
        </div>
      </div>
      <h2 id="faq" className="h2-financiacion text-center module">
        PREGUNTAS MÁS FRECUENTES
      </h2>
      <div
        className="accordion accordion-flush w-75 m-auto module my-5"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h4 className="pregunta-title">
                ¿Por qué tengo que aprender a programar?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                El mundo está cambiando, y para el cambio se necesitan expertos
                en código. Actualmente se <b>precisan 85.000 programadores</b>{" "}
                en España. La demanda es y va a ser exponencial, y{" "}
                <b>
                  no hay suficientes programadores para cubrir las necesidades
                </b>
                . Por eso pensamos que estudiar programación es el futuro, y
                Releevant te ayuda a aprender programación desde cero.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h4 className="pregunta-title">
                ¿Qué puedo estudiar para ser programador?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Si tu preguntar es qué estudiar para ser un programador, desde
                Releevant lo tenemos claro: nuestro{" "}
                <b>bootcamp de Desarrollo web</b>. Podrás{" "}
                <b>aprender a programar desde cero</b> en entornos web, o si ya
                has estudiado programación, aprenderás nuevas tecnologías, con
                un temario adaptado a un aprendizaje progresivo. Aprenderás
                desde a cómo maquetar una web, hasta los frameworks más potentes
                para llevar tus proyectos al siguiente nivel. Nosotros te
                guiaremos por el camino, para que te conviertas en alguien
                releevante del sector tecnológico.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h4 className="pregunta-title">
                Razones para hacer un bootcamp de desarrollo web
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Hay muchas razones para que te subas a esta aventura de hacer un
                curso de desarrollador web. Tanto si quieres{" "}
                <b>
                  cambiar de profesión, dar un giro a tu vida, ampliar,
                  actualizar tus conocimientos o emprender en el mundo digital
                </b>
                , ¡¡¡reciclarte profesionalmente y entra en el apasionante
                sector de la tecnología!!!
              </p>
              <p className="p-faq">
                {" "}
                Puede que lleves muchos años trabajando en el mismo trabajo, y
                te aburre o te sientes estancado sin posibilidades de progresar.
                El mundo está cambiando; vivimos una época apasionante dentro
                del <b>mundo IT</b>, donde cada día{" "}
                <b>hacen falta más expertos</b> y la demanda no se cubre. Las
                instituciones educativas tradicionales no pueden adaptarse a los
                continuos cambios y actualizaciones que se producen en la
                tecnología a una velocidad vertiginosa, pero los bootcamps
                tienen la capacidad de reacción inmediata: solucionan el
                problema de cómo aprender a programar desde 0, y podemos
                incorporar a nuestro programa todos aquellos{" "}
                <b>nuevos contenidos</b> que interesen en tu aprendizaje porque
                son los que utilizan las empresas en cada momento.{" "}
              </p>
              <p className="p-faq">
                <b>Llevamos ventaja frente a otras ofertas formativas</b>:
                nuestros expertos son profesionales referentes en el sector, con
                muchos años de experiencia en el mundo del desarrollo, y que son
                capaces de dirigir tu aprendizaje como si estuvieras ya en una
                empresa: aprendiendo a trabajar y a desarrollar una profesión
                real, no basada en temarios, sino en práctica y casos reales.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <h4 className="pregunta-title">
                ¿Necesito alguna experiencia previa o requisito previo?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Mucha gente se pregunta cuando empieza qué estudiar para ser
                programador, cómo aprender a programar desde 0, o si necesito de
                alguna experiencia para ello. La realidad es que{" "}
                <b>no necesitas ninguna titulación para entrar</b>. La
                programación es para todos y cualquiera puede descubrir y
                trabajar en el mundo del código. Necesitarás iniciarte en el
                pensamiento lógico, la resolución de problemas y las decisiones
                estructuradas, pero no te preocupes, desde la primera clase te
                enseñaremos a acostumbrarte a estas disciplinas.{" "}
              </p>
              <p className="p-faq">
                Comenzamos el{" "}
                <b>bootcamp para que puedas aprender a programar desde cero</b>,
                con un temario adaptado a un aprendizaje progresivo, estimulando
                de forma continua diferentes procesos cognitivos que aceleran tu
                progreso. El desarrollo de tu aprendizaje es sobre todo,{" "}
                <b>práctico</b>, aplicarás todos los conocimientos que vayas
                adquiriendo en casos reales idénticos a los que se realizan en
                las empresas, ya que tu futuro está allí, trabajando en la
                empresa.
              </p>
              <p className="p-faq">
                {" "}
                ¿Estás motivado para cambiar tu situación actual? Sólo{" "}
                <b>necesitas actitud, entusiasmo y energía</b>
                para los <b>5 meses</b> de experiencia práctica continua que
                vamos a proporcionarte.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <h4 className="pregunta-title">
                Y si ya sé programar, ¿de qué me sirve este bootcamp?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Algunos de los estudiantes que han entrado al bootcamp ya
                poseían alguna certificación en informática o han realizado
                formación previa. Estudiar programación no lo es todo, y{" "}
                <b>en este bootcamp no sólo enseñamos programación</b>. Te
                actualizarás: aprenderás a usar las últimas herramientas
                profesionales como <b>GitHub</b>, metodologías de trabajo que se
                utilizan en las empresas reales y trabajarás en
                <b>AGILE</b>. Además, aprenderás las mejores prácticas de
                desarrollo de programas, los principios <b>SOLID</b> y
                tecnologías como <b>MongoDB, ExpressJS, NodeJS y React</b>.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <h4 className="pregunta-title">
                ¿Tengo que llevar mi propio ordenador?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                No es necesario. En Releevant tienes{" "}
                <b>
                  para ti un ordenador de alta gama que utilizarás durante todo
                  el bootcamp
                </b>
                . Eso sí, si tu portátil y tú sois inseparables, dínoslo, lo
                entendemos.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <h4 className="pregunta-title">
                ¿A qué trabajos puedo optar si hago este bootcamp?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSeven"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Podrás trabajar como programador <b>Back-End</b>, programador
                <b>Front-End</b>, desarrollador{" "}
                <b>Full-Stack, desarrollador de aplicaciones, diseñador web</b>…
                son profesiones que requiere el mercado laboral y que su demanda
                va a crecer de forma exponencial en los próximos años. Ten en
                cuenta que te incorporarás como programador junior, aún te
                quedará mucho camino en tu progreso.
              </p>
              <p className="p-faq">
                En nuestros bootcamps de programación se logra una{" "}
                <b>empleabilidad superior al 90% de los alumnos graduados</b>.
                Las empresas están esperando constantemente nuevos técnicos que
                cubran las necesidades de sus departamentos.
              </p>
              <p className="p-faq">
                El sector IT es el que más empleo genera, y se prevé que tan
                sólo hasta 2.025 se crearán 500.000 puestos de trabajo en
                tecnología. Por lo tanto, no se forman los suficientes técnicos
                en la educación reglada cada año, por lo que las formaciones
                privadas están siendo un éxito, ya que en poco tiempo estarás
                preparado para incorporarte como desarrollador. Aprender a
                programar desde cero nunca ha sido tan sencillo.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              <h4 className="pregunta-title">¿Puedo financiar el bootcamp?</h4>
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingEight"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                Por supuesto. Ayudamos a todas las personas que quieran estudiar
                programación. No todas las personas tenemos las mismas
                circunstancias. Puedes fraccionar el pago durante la duración
                del Bootcamp. Explícanos cuáles son las tuyas y te asesoraremos.
                Además, trabajamos con entidades bancarias que te proporcionan
                <b>préstamo de estudios</b> con unas condiciones y un periodo de
                carencia muy atractivas.{" "}
                <HashLink to="/curso-desarrollo/#financiacion">
                  Tienes más información en esta página
                </HashLink>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
              <h4 className="pregunta-title">
                ¿Por qué un curso de desarrollo web presencial?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingNine"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                En Releevant defendemos que la presencialidad es algo
                fundamental para una enseñanza profunda. No es lo mismo estar
                delante de tu ordenador sentado intentado resolver problemas,
                que tener un profesor al lado por si te surge cualquier duda.
                Por eso hemos lanzado este bootcamp de desarrollo web, y tenemos
                idea de ir lanzando cursos de informática por toda Málaga.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTen"
              aria-expanded="false"
              aria-controls="flush-collapseTen"
            >
              <h4 className="pregunta-title">
                ¿Tenéis pensado hacer más cursos de informática en Málaga?
              </h4>
            </button>
          </h2>
          <div
            id="flush-collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTen"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="p-faq">
                La respuesta es <b>sí</b>. Sabemos que{" "}
                <b>
                  Málaga es uno de los centros tecnológicos más importantes de
                  España
                </b>
                , y por eso sabemos la demanda que hay de programadores. Este
                curso de desarrollador web es solo el primer paso de muchos
                cursos de informática y bootcamps que haremos en Málaga. Están
                en camino los bootcamps de Java y Angular, bootcamps de I.A, y
                muchos más.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="h2-startups text-center module">
        ¡EMPIEZA TU NUEVA VIDA COMO DESARROLLADOR WEB!
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
              placeholder="Quiero saber más acerca del bootcamp de Desarrollo Web."
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

export default CorsoWeb;
