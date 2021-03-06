import React, { useState, useEffect } from "react";
import Image from "../../components/images/programming3.jpg";
import Image1 from "../../components/images/codeBoot.jpg";
import "../../style/css-cursoweb.css";
import "../../style/css.bootcamp.scss";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { HashLink } from "react-router-hash-link";
import emailjs from "emailjs-com";

function CorsoWeb() {
  const { docentes } = useGlobalContext();
  const initialValues = { nombre: "", email: "", telefono: "", info: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [biografia, setBiografia] = useState("");
  const [nombreBio, setNombreBio] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  function bio(_id) {
    var docente = docentes.find((d) => d._id === _id);
    setBiografia(docente.bio);
    var nomeDocente = docentes.find((n) => n._id === _id);
    setNombreBio(nomeDocente.nombre);
  }

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
      errors.email = "Introducir un correo eletr??nico!";
    } else if (!regex.test(values.email)) {
      errors.email = "Introducir un correo eletr??nico!";
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
        className="foto-cursoweb"
        id="foto-cursoweb"
        src={Image}
        alt="code"
        width={"100%"}
      />
      <h1 className="title-cursoweb text-center">BOOTCAMP DESARROLLO WEB</h1>
      <div className="boot">
        <p className="p-title-cursoweb text-center">
          <b>Releevant</b> ofrece el mejor bootcamp de la M??laga tecnol??gica.
          Somos pioneros. En 2016 trajimos el modelo de bootcamp tecnol??gico a
          M??laga, iniciando un tenaz camino que ha estado lleno de aprendizaje,
          pero tambi??n repleto de ??xitos; podemos presumir que gracias al modelo
          de c??mo aprender a programar desde 0, m??s de 200 programadores en
          activo han pasado por nuestras formaciones.
        </p>
      </div>

      <h2 className="h2-programar text-center module">
        APRENDE A PROGRAMAR DESDE CERO CON RELEEVANT
      </h2>
      <div className="my-5">
        <p className="p-rel-curso module">
          En <b>Releevant</b> tenemos muchos a??os de experiencia en formaci??n
          tecnol??gica. Nuestros expertos, adem??s, pertenecen a la industria IT,
          por lo que nuestras formaciones son dise??adas, impartidas y dirigidas
          por profesionales en activo, lo que proporciona un valor a??adido al
          aprender de especialistas que te ense??an c??mo se trabaja en las
          empresas con las herramientas que practicar??s con nosotros.
        </p>
        <p className="p-rel-curso module">
          Acumulamos a lo largo de los a??os{" "}
          <b>
            miles de horas en cursos para empresas y compa????as, muchas ediciones
            de Bootcamps
          </b>{" "}
          tecnol??gicos, y somos referentes en M??laga y Andaluc??a a la hora de
          hablar de formaci??n tecnol??gica.
        </p>
        <p className="p-rel-curso module mb-5">
          <b>
            Somos pioneros. En 2016 trajimos el modelo de bootcamp tecnol??gico a
            M??laga
          </b>
          , iniciando un tenaz camino que ha estado lleno de aprendizaje, pero
          tambi??n repleto de ??xitos; podemos presumir que gracias al modelo de
          c??mo aprender a programar desde 0, m??s de 200 programadores en activo
          han pasado por nuestras formaciones.
        </p>
      </div>
      <div className="etapas-boot">
        <h2 className="title-h2-cursoweb text-center module">
          ??QU?? APRENDER?? EN EL BOOTCAMP?
        </h2>
        <div className="etapas module">
          <div className="row">
            <div className="etapas-col col-2">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="title-cursow list-group-item list-group-item-action active btn-secondary"
                  id="list-home-list"
                  data-bs-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="list-home"
                >
                  ETAPA 1
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
                  id="list-profile-list"
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="list-profile"
                >
                  ETAPA 2
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
                  id="list-messages-list"
                  data-bs-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="list-messages"
                >
                  ETAPA 3
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
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
                  <h3 className="h3-web">
                    MAQUETACI??N Y BASES DE PROGRAMACI??N
                  </h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated  bg-info"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    En esta etapa aprender??s los conceptos m??s b??sicos de la
                    programaci??n web. Empezaremos con{" "}
                    <b>HTML, CSS, SASS y SCSS</b>, junto con{" "}
                    <b>dise??os responsive, Flexbox y Bootstrap</b>. Todo ello
                    para tener unas bases s??lidas de maquetaci??n web. Una vez
                    tengamos el ???esqueleto??? de la web hecho, habr?? que darle
                    funcionalidades. Es ah?? cuando entra <b>Javascript</b>.
                    Aprenderemos a manipular el DOM, es decir, darle vida a las
                    webs en todos los sentidos. Asentaremos los conceptos
                    iniciales que iremos completando en el resto de etapas.
                    Tambi??n te familiarizar??s con el <b>control de versiones</b>
                    .
                  </p>
                  <p className="p-web">
                    Para finalizar, har??s tu <b>primer proyecto</b>, para
                    asegurar y afianzar los conocimientos de los lenguajes que
                    has aprendido. Pero eso no es todo, ??hay m??s! ???
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  <h3 className="h3-web">BACK-END Y PROGRAMACI??N AVANZADA</h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    En la segunda etapa de este bootcamp nos metemos de lleno en
                    la parte m??s abstracta de la programaci??n: el{" "}
                    <b>back-end</b>. Aprender??s conceptos como <b>MVC</b>{" "}
                    (modelo-vista-controlador) y crear??s tu propio servidor de
                    la mano de <b>Node.js y ExpressJS</b>. Empezar??s a tratar y
                    manejar bases de datos de la mano de
                    <b> MySQL</b> y <b>MongoDB</b>, aprender??s las diferencias
                    entre ellas y te meter??s de lleno en el mundo de las
                    solicitudes <b> HTTP</b> y las
                    <b> API</b>. Tambi??n entrar??s en el mundo de algunas de las
                    tecnolog??as m??s punteras actualmente, como{" "}
                    <b>AWS y Docker</b>.
                  </p>
                  <p className="p-web">
                    Para finalizar, har??s tu <b>segundo proyecto</b>, esta vez
                    para combinar todo lo que has aprendido en las dos etapas.
                    Podr??s
                    <b> crear una </b>web b??sica, tanto con su <b>front-end</b>{" "}
                    como con su
                    <b> back-end</b>, en la que podr??s guardar, enviar,
                    modificar y eliminar datos. Adem??s, te ayudar?? a afianzar
                    todav??a m??s tus conocimientos para avanzar hacia tu ??ltimo
                    reto. ???
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
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    Esta va a ser la etapa del bootcamp m??s intensa. Pondr??s a
                    prueba todos los conocimientos adquiridos hasta ahora, y
                    aprender??s la{" "}
                    <b>librer??a de front-end m??s potente del mercado: React</b>.
                    Desarrollado por <b>Facebook</b>, es uno de los lenguajes
                    m??s demandados actualmente en el sector tecnol??gico.
                    Aprender??s conceptos como <b>SPA</b> (Single Page
                    Application) y la arquitectura basada en componentes se
                    convertir?? en algo habitual para ti.
                  </p>
                  <p className="p-web">
                    Aparte de esto, aprender??s conocimientos de <b>SCRUM</b>,
                    para saber c??mo organizan y estructuran los proyectos las
                    mejores empresas; sabr??s todos los pasos para{" "}
                    <b>organizar y crear un proyecto real</b>, y lograr??s tener
                    una base s??lida de los conceptos de <b>UI</b> (User
                    Interface) y <b>UX</b> (User Experience).
                  </p>
                  <p className="p-web">
                    En este momento ya estar??s listo para??? ??enfrentarte al
                    <b> proyecto final</b>! Unir??s todo lo aprendido en estas
                    etapas, y como resultado{" "}
                    <b>crear??s una aut??ntica aplicaci??n full-stack</b>. Pondr??s
                    a prueba tus conocimientos en front-end con React y la
                    maquetaci??n, y tus conocimientos en back-end con las bases
                    de datos y Node.js. Adem??s,{" "}
                    <b>
                      este proyecto final ser?? expuesto a las empresas que te
                      contratar??n
                    </b>
                    . Pero??? ??eso te lo contamos en la siguiente etapa! ???
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  <h3 className="h3-web">??HIRING DAY!</h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    Esta es la ??ltima etapa del bootcamp de desarrollo web.
                    ??Aqu?? ya ser??s todo un{" "}
                    <b>
                      <i>Full Stack Web Developer</i>
                    </b>
                    ! En ella tendr??s charlas de empresas y profesionales que
                    vendr??n a <b>reclutar</b> a los alumnos del bootcamp.
                    Tambi??n habr?? <b>visitas a empresas</b>, para que conozcas
                    de primera mano c??mo funcionan por dentro. Por ??ltimo,
                    presentar??s tu proyecto final ante{" "}
                    <b>m??ltiples empresas del sector tecnol??gico</b>. ??El
                    trabajo estar?? hecho! En este momento estar??s listo para
                    optar a muchos puestos de trabajo en el sector.
                  </p>
                  <p className="p-web">
                    <b>Releevant te acompa??ar?? y asesorar??</b> sobre c??mo hacer
                    las entrevistas, informaci??n relevante sobre ellas, y
                    mediar?? para que los procesos para que encuentres trabajo
                    sean los mas cortos posibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-boot row" style={{ margin: "0vh 0vh" }}>
        <div className="image-boot col-4"></div>
        <div className="columna-8 col-8">
          <div className="row">
            <div className="formacion-bootcamp module">
              <div className="formacion-divs-bootcamp1 div-11 module">
                <div class="flip-box1" style={{ margin: "0vh 0vh" }}>
                  <div class="flip-box-inner">
                    <div class="flip-box-front1">
                      <h3 className="h3-bootcamp text-center mt-3">
                        Si te ha graduato recientemente...
                      </h3>
                    </div>
                    <div class="flip-box-back">
                      <p className="p-formacion-bootcamp">
                        Si te acabas de graduar en FP o en la universidad, este{" "}
                        <b>bootcamp de programaci??n</b> orientado a desarrollo
                        web te proporcionar?? las habilidades imprescindibles
                        para poder iniciar tu propia carrera como programador.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formacion-divs-bootcamp1 div-22 module">
                <div class="flip-box2">
                  <div class="flip-box-inner">
                    <div class="flip-box-front2">
                      <h3 className="h3-bootcamp text-center mt-3">
                        Si quieres trabajar en el sector tecnol??gico...
                      </h3>
                    </div>
                    <div class="flip-box-back">
                      <p className="p-formacion-bootcamp">
                        Este <b>bootcamp de programaci??n en M??laga</b>{" "}
                        complementar?? los conocimientos que ya tienes
                        adquiridos, podr??s optar a perfiles o roles m??s
                        t??cnicos, adem??s tendr??s una perspectiva m??s enfocada a
                        las ??ltimas tecnolog??as.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h2 className="h2-cursoweb text-center module">
              ??Este bootcamp es para mi?
            </h2>
          </div>
          <div className="row">
            <div className="formacion-bootcamp module">
              <div className="formacion-divs-bootcamp1 div-11 module">
                <div class="flip-box3" style={{ margin: "0vh 0vh" }}>
                  <div class="flip-box-inner">
                    <div class="flip-box-front3">
                      <h3 className="h3-bootcamp text-center mt-3">
                        Si buscas impulsar tu carrera...
                      </h3>
                    </div>
                    <div class="flip-box-back">
                      <p className="p-formacion-bootcamp">
                        Este <b>bootcamp de programaci??n para desarrollo web</b>{" "}
                        es perfecto para alguien que est?? buscando entrar en el
                        sector tecnol??gico. Te ayudar?? a conseguir los
                        conocimientos necesarios para poder conseguir trabajo
                        como desarrollador junior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formacion-divs-bootcamp1 div-22 module">
                <div class="flip-box4">
                  <div class="flip-box-inner">
                    <div class="flip-box-front4">
                      <h3 className="h3-bootcamp text-center mt-3">
                        Si quieres cambiar de vida...
                      </h3>
                    </div>
                    <div class="flip-box-back">
                      <p className="p-formacion-bootcamp">
                        En realidad, para iniciarte en el mundo tecnol??gico y
                        llegar a ser un{" "}
                        <b>
                          <i>Full Stack Web Developer</i>
                        </b>{" "}
                        no necesitas ninguna caracter??stica en especial.
                        Trabajes en lo que trabajes, seas como seas, si tienes
                        iniciativa, actitud y ganas de aprender, conseguir??s
                        entrar en el sector IT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-dos d-flex justify-content-evenly">
        <div className="sec-uno d-flex justify-content flex-column">
          <div>
            <h2
              className="h2-cursoweb-sec-dos text-center module"
              id="precencialidad"
            >
              ??POR QU?? ESTUDIAR ESTE BOOTCAMP?
            </h2>
          </div>
          <div>
            <img className="image-bo" src={Image1} alt="coding" width={"95%"} />
          </div>
          <div>
            <p className="p-formacion-why">
              Releevant es mucho m??s que un sitio para formarte
            </p>
          </div>
        </div>
        <div className="d-flex justify-content flex-column">
          <div className="sec-why">
            <h3 className="why">
              <span>01</span> Aprender??s las ??ltimas tecnolog??as
            </h3>
            <p className="p-formacion-sec-dos">
              Hemos dise??ado un temario para que aprendas desde cero las
              tecnolog??as que m??s demandan las empresas. Recuerda, en el sector
              IT hay una enorme demanda.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>02</span> La mejor metodolog??a para aprender
            </h3>
            <p className="p-formacion-sec-dos">
              Desde nuestra experiencia, la mejor forma de aprender programaci??n
              es... programando. Parece evidente, pero no suele ser como se
              hacen las cosas. En Releevant presentamos una experiencia muy
              pr??ctica con este bootcamp de programaci??n, haciendo que el alumno
              realice proyectos por ??l mismo, sin olvidar el justo equilibrio
              con las bases de la teor??a y los fundamentos de la programaci??n.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>03</span> Desarrollar??s tus soft-skills
            </h3>
            <p className="p-formacion-sec-dos">
              Te ayudamos a desarrollar tu trabajo en equipo, tu comunicaci??n en
              un entorno de trabajo, tu capacidad para realizar proyectos
              complejos en tiempo y de la forma m??s adecuada.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>04</span> Pertenecer??s a #releevantpeople
            </h3>
            <p className="p-formacion-sec-dos">
              Formamos una gran comunidad de desarrolladores dispuestos a
              acogerte con los brazos abiertos. Tendr??s acceso a los meetups,
              masterclassName y eventos. Releevant es mucho m??s que un sitio
              para formarte. Te sentir??s desde el primer d??a dentro del sector
              tecnol??gico.
            </p>
          </div>
        </div>
      </div>
      <h2 className="h2-docentes text-center module" id="profesores">
        TUS PROFESORES
      </h2>
      <div className="container module">
        <div className="row justify-content-between">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              snap: true,
              perPage: 3,
              autoScroll: {
                speed: 2,
              },
              arrows: true,
              pagination: false,
              breakpoints: {
                700: {
                  perPage: 1,
                },
              },
              breakpoints: {
                1425: {
                  perPage: 2,
                },
              },
              breakpoints: {
                1023: {
                  perPage: 1,
                },
              },
              gap: "3rem",
            }}
          >
            {docentes.map((docente) => {
              return (
                <SplideSlide key={docente._id}>
                  <div className="col d-flex justify-content-around">
                    <div className="card mb-5" style={{ width: "19rem" }}>
                      <img
                        src={docente.foto}
                        className="card-img-top embed-responsive-item"
                        alt="..."
                        width={"15%"}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{docente.nombre}</h5>
                        <h6>{docente.posicion}</h6>
                        <p className="card-text overview">{docente.bio}</p>
                        <button
                          onClick={() => bio(docente._id)}
                          type="button"
                          className="btn btn-secondary mr-1"
                          data-toggle="modal"
                          data-target="#foo"
                        >
                          See full bio
                        </button>
                        <a
                          className="ml-5"
                          href={docente.LinkedIn}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="37"
                            height="37"
                            fill="gray"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <div
        className="modal fade"
        id="foo"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {nombreBio} Bio
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body example">
              <div>{biografia}</div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 id="financiacion" className="h2-financiacion text-center module">
        OPCIONES DE FINANCIACI??N Y BECAS
      </h2>
      <h5 className="h5-financiacion text-center">
        Construye tu futuro con la financiaci??n que necesites
      </h5>
      <div className="picture">
        <div className="container">
          <div className="finanziazione row">
            <div className="basico col">
              <h3 className="h3-fin">Basico</h3>
              <u className="list-fin">
                <li className="list-fin">
                  <b>Pago ??nico inicial.</b>
                </li>
                <li className="list-fin">
                  <b>Obtienes 5% de descuento</b>.
                </li>
              </u>
              <HashLink
                to="/inicio/#form-inicio"
                className="bottone1 btn btn-light mb-5"
              >
                ??5% de descuento!
              </HashLink>
            </div>
            <div className="basico col">
              <h3 className="h3-fin">Pro</h3>
              <u className="list-fin">
                <li className="list-fin">
                  <b>Te financiamos nosotros.</b>
                </li>
                <li className="list-fin">
                  <b>Reserva matricula 25%</b>
                </li>
                <li className="list-fin">
                  <b>Cuotas en 5 meses</b>
                </li>
                <li className="list-fin">
                  <b>Sin interes, ni trampas.</b>
                </li>
              </u>
              <HashLink
                to="/inicio/#form-inicio"
                className="bottone2 btn btn-light"
              >
                ??Cuotas en 5 meses!
              </HashLink>
            </div>
            <div className="basico col">
              <h3 className="h3-fin">Unicaja</h3>
              <u className="list-fin">
                <li className="list-fin">
                  <b>Con Unicaja Banco Exclusivo</b>
                </li>
                <li className="list-fin">
                  <b>Paga hasta un a??o despues de haber comenzado</b>
                </li>
              </u>
              <HashLink
                to="/inicio/#form-inicio"
                className="bottone3 btn btn-light"
              >
                ??Me interesa!
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="finan">
        <h3 className="h3-pag text-center">
          ??Y si te dij??ramos que no pagas hasta que no encuentres trabajo?{" "}
          <HashLink to="/inicio/#form-inicio" className="btn btn-light">
            ??CU??NTAME!
          </HashLink>
        </h3>
      </div>
      <h2 id="faq" className="h2-financiacion text-center module">
        PREGUNTAS M??S FRECUENTES
      </h2>
      <div
        className="accordion-acc accordion accordion-flush m-auto module my-5 w-50"
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
                ??Por qu?? tengo que aprender a programar?
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
                El mundo est?? cambiando, y para el cambio se necesitan expertos
                en c??digo. Actualmente se <b>precisan 85.000 programadores</b>{" "}
                en Espa??a. La demanda es y va a ser exponencial, y{" "}
                <b>
                  no hay suficientes programadores para cubrir las necesidades
                </b>
                . Por eso pensamos que estudiar programaci??n es el futuro, y
                Releevant te ayuda a aprender programaci??n desde cero.
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
                ??Qu?? puedo estudiar para ser programador?
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
                Si tu preguntar es qu?? estudiar para ser un programador, desde
                Releevant lo tenemos claro: nuestro{" "}
                <b>bootcamp de Desarrollo web</b>. Podr??s{" "}
                <b>aprender a programar desde cero</b> en entornos web, o si ya
                has estudiado programaci??n, aprender??s nuevas tecnolog??as, con
                un temario adaptado a un aprendizaje progresivo. Aprender??s
                desde a c??mo maquetar una web, hasta los frameworks m??s potentes
                para llevar tus proyectos al siguiente nivel. Nosotros te
                guiaremos por el camino, para que te conviertas en alguien
                releevante del sector tecnol??gico.
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
                  cambiar de profesi??n, dar un giro a tu vida, ampliar,
                  actualizar tus conocimientos o emprender en el mundo digital
                </b>
                , ??????reciclarte profesionalmente y entra en el apasionante
                sector de la tecnolog??a!!!
              </p>
              <p className="p-faq">
                {" "}
                Puede que lleves muchos a??os trabajando en el mismo trabajo, y
                te aburre o te sientes estancado sin posibilidades de progresar.
                El mundo est?? cambiando; vivimos una ??poca apasionante dentro
                del <b>mundo IT</b>, donde cada d??a{" "}
                <b>hacen falta m??s expertos</b> y la demanda no se cubre. Las
                instituciones educativas tradicionales no pueden adaptarse a los
                continuos cambios y actualizaciones que se producen en la
                tecnolog??a a una velocidad vertiginosa, pero los bootcamps
                tienen la capacidad de reacci??n inmediata: solucionan el
                problema de c??mo aprender a programar desde 0, y podemos
                incorporar a nuestro programa todos aquellos{" "}
                <b>nuevos contenidos</b> que interesen en tu aprendizaje porque
                son los que utilizan las empresas en cada momento.{" "}
              </p>
              <p className="p-faq">
                <b>Llevamos ventaja frente a otras ofertas formativas</b>:
                nuestros expertos son profesionales referentes en el sector, con
                muchos a??os de experiencia en el mundo del desarrollo, y que son
                capaces de dirigir tu aprendizaje como si estuvieras ya en una
                empresa: aprendiendo a trabajar y a desarrollar una profesi??n
                real, no basada en temarios, sino en pr??ctica y casos reales.
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
                ??Necesito alguna experiencia previa o requisito previo?
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
                Mucha gente se pregunta cuando empieza qu?? estudiar para ser
                programador, c??mo aprender a programar desde 0, o si necesito de
                alguna experiencia para ello. La realidad es que{" "}
                <b>no necesitas ninguna titulaci??n para entrar</b>. La
                programaci??n es para todos y cualquiera puede descubrir y
                trabajar en el mundo del c??digo. Necesitar??s iniciarte en el
                pensamiento l??gico, la resoluci??n de problemas y las decisiones
                estructuradas, pero no te preocupes, desde la primera clase te
                ense??aremos a acostumbrarte a estas disciplinas.{" "}
              </p>
              <p className="p-faq">
                Comenzamos el{" "}
                <b>bootcamp para que puedas aprender a programar desde cero</b>,
                con un temario adaptado a un aprendizaje progresivo, estimulando
                de forma continua diferentes procesos cognitivos que aceleran tu
                progreso. El desarrollo de tu aprendizaje es sobre todo,{" "}
                <b>pr??ctico</b>, aplicar??s todos los conocimientos que vayas
                adquiriendo en casos reales id??nticos a los que se realizan en
                las empresas, ya que tu futuro est?? all??, trabajando en la
                empresa.
              </p>
              <p className="p-faq">
                {" "}
                ??Est??s motivado para cambiar tu situaci??n actual? S??lo{" "}
                <b>necesitas actitud, entusiasmo y energ??a</b>
                para los <b>5 meses</b> de experiencia pr??ctica continua que
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
                Y si ya s?? programar, ??de qu?? me sirve este bootcamp?
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
                pose??an alguna certificaci??n en inform??tica o han realizado
                formaci??n previa. Estudiar programaci??n no lo es todo, y{" "}
                <b>en este bootcamp no s??lo ense??amos programaci??n</b>. Te
                actualizar??s: aprender??s a usar las ??ltimas herramientas
                profesionales como <b>GitHub</b>, metodolog??as de trabajo que se
                utilizan en las empresas reales y trabajar??s en
                <b>AGILE</b>. Adem??s, aprender??s las mejores pr??cticas de
                desarrollo de programas, los principios <b>SOLID</b> y
                tecnolog??as como <b>MongoDB, ExpressJS, NodeJS y React</b>.
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
                ??Tengo que llevar mi propio ordenador?
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
                  para ti un ordenador de alta gama que utilizar??s durante todo
                  el bootcamp
                </b>
                . Eso s??, si tu port??til y t?? sois inseparables, d??noslo, lo
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
                ??A qu?? trabajos puedo optar si hago este bootcamp?
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
                Podr??s trabajar como programador <b>Back-End</b>, programador
                <b> Front-End</b>, desarrollador{" "}
                <b>Full-Stack, desarrollador de aplicaciones, dise??ador web</b>???
                son profesiones que requiere el mercado laboral y que su demanda
                va a crecer de forma exponencial en los pr??ximos a??os. Ten en
                cuenta que te incorporar??s como programador junior, a??n te
                quedar?? mucho camino en tu progreso.
              </p>
              <p className="p-faq">
                En nuestros bootcamps de programaci??n se logra una{" "}
                <b>empleabilidad superior al 90% de los alumnos graduados</b>.
                Las empresas est??n esperando constantemente nuevos t??cnicos que
                cubran las necesidades de sus departamentos.
              </p>
              <p className="p-faq">
                El sector IT es el que m??s empleo genera, y se prev?? que tan
                s??lo hasta 2.025 se crear??n 500.000 puestos de trabajo en
                tecnolog??a. Por lo tanto, no se forman los suficientes t??cnicos
                en la educaci??n reglada cada a??o, por lo que las formaciones
                privadas est??n siendo un ??xito, ya que en poco tiempo estar??s
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
              <h4 className="pregunta-title">??Puedo financiar el bootcamp?</h4>
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
                programaci??n. No todas las personas tenemos las mismas
                circunstancias. Puedes fraccionar el pago durante la duraci??n
                del Bootcamp. Expl??canos cu??les son las tuyas y te asesoraremos.
                Adem??s, trabajamos con entidades bancarias que te proporcionan
                <b>pr??stamo de estudios</b> con unas condiciones y un periodo de
                carencia muy atractivas.{" "}
                <HashLink to="/curso-desarrollo/#financiacion">
                  Tienes m??s informaci??n en esta p??gina
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
                ??Por qu?? un curso de desarrollo web presencial?
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
                fundamental para una ense??anza profunda. No es lo mismo estar
                delante de tu ordenador sentado intentado resolver problemas,
                que tener un profesor al lado por si te surge cualquier duda.
                Por eso hemos lanzado este bootcamp de desarrollo web, y tenemos
                idea de ir lanzando cursos de inform??tica por toda M??laga.
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
                ??Ten??is pensado hacer m??s cursos de inform??tica en M??laga?
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
                La respuesta es <b>s??</b>. Sabemos que{" "}
                <b>
                  M??laga es uno de los centros tecnol??gicos m??s importantes de
                  Espa??a
                </b>
                , y por eso sabemos la demanda que hay de programadores. Este
                curso de desarrollador web es solo el primer paso de muchos
                cursos de inform??tica y bootcamps que haremos en M??laga. Est??n
                en camino los bootcamps de Java y Angular, bootcamps de I.A, y
                muchos m??s.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-cont">
        <section id="contact">
          <h2
            className="h2-compania-inicio text-center module"
            id="form-inicio"
          >
            ??QUIERES M??S INFORMACI??N?
          </h2>
          <h5 className="h5-curso text-center">
            ??Rellena nuestro formulario y la obtendr??s!
          </h5>
          <div className="contact-wrapper">
            <form
              id="contact-form"
              className="form-horizontal"
              role="form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <div className="">
                  <input
                    id="nombre"
                    name="nombre"
                    className="form-control form-control w-100 m-auto my-3"
                    type="text"
                    onChange={handleChange}
                    placeholder="Nombre y apellido"
                    value={formValues.nombre}
                    required
                  />
                  <p className="error">{formErrors.nombre}</p>
                </div>
              </div>

              <div className="form-group">
                <div className="">
                  <input
                    id="email"
                    name="email"
                    className="form-control form-control w-100 m-auto my-3"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Correo electr??nico"
                    required
                  />
                  <p className="error">{formErrors.email}</p>
                </div>
              </div>

              <p className="error">{formErrors.email}</p>
              <input
                id="telefono"
                name="telefono"
                className="form-control"
                type="text"
                value={formValues.telefono}
                onChange={handleChange}
                placeholder="M??vil de contacto"
                required
              />
              <p className="error">{formErrors.telefono}</p>

              <div className="text-area w-100 m-auto">
                <textarea
                  id="info"
                  name="info"
                  wrap="hard"
                  className="form-control w-100 m-auto  my-3"
                  value={formValues.info}
                  onChange={handleChange}
                  placeholder="Quiero m??s informaci??n sobre Releevant."
                  rows="3"
                  cols="5"
                ></textarea>
                <p className="error">{formErrors.info}</p>
              </div>
              {Object.keys(formErrors).length === 0 && isSubmit && (
                <div className="correct">
                  Su formulario se ha env??ado correctamente!
                </div>
              )}

              <button
                className="btn btn-secondary send-button"
                id="submit"
                type="submit"
              >
                {" "}
                <i className="fa fa-paper-plane"></i> &nbsp; Enviar
              </button>
            </form>

            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <i className="fa fa-map-marker fa-2x">
                    <span className="contact-text place">
                      Polo de contenidos digitales
                    </span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fa fa-phone fa-2x">
                    <span className="contact-text phone">
                      <a href="tel:+34 695 30 40 40" title="Give me a call">
                        +34 695 30 40 40
                      </a>
                    </span>
                  </i>
                </li>

                <li className="list-item">
                  <i className="fa fa-envelope fa-2x">
                    <span className="contact-text gmail">
                      <a
                        href="mailto:hola@releevant.com"
                        title="Send me an email"
                      >
                        hola@releevant.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>

              <hr />
              <ul className="social-media-list">
                <li>
                  <a
                    href="https://www.linkedin.com/company/releevant/"
                    target="_blank"
                    className="contact-icon"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/releevant.tech"
                    target="_blank"
                    className="contact-icon"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.meetup.com/es-ES/releevant/?_cookie-check=Xd_hTaHLTwr8rzUr"
                    target="_blank"
                    className="contact-icon"
                  >
                    <i className="fab fa-meetup" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CorsoWeb;
