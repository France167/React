import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function FooterRel() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/releevant.tech"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.releevant.com/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?next=/_releevant/"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/releevant/"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.meetup.com/es-ES/releevant/?_cookie-check=Xd_hTaHLTwr8rzUr"
              className="me-4 text-reset"
            >
              <i className="fab fa-meetup"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <Link to="/">
                    <img
                      src="../../favicon.ico"
                      alt="logo Releevant"
                      style={{ width: "50%" }}
                    />
                  </Link>
                </h6>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Releevant</h6>
                <p>
                  <a href="#!" className="link-foot text-reset">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-foot text-reset">
                    Desarrolla con nosotros
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-foot text-reset">
                    Ideas y Startups
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-foot text-reset">
                    Releevant?
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Releevant</h6>
                <p>
                  <a href="#!" className="link-foot text-reset">
                    FAQs
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-foot text-reset">
                    Política de Cookies
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-foot text-reset">
                    Política de Privacidad
                  </a>
                </p>
                <p>
                  <a href="#!" className="link-foot text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Polo de contenidos
                  digitales
                </p>
                <p>
                  <i className="fas fa-home me-3"></i>Av Sor Teresa Prat, 15,
                  29003 Málaga
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  hola@releevant.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +34 695 30 40 40
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:{" "}
          <a
            className="link-foot text-reset fw-bold"
            href="https://mdbootstrap.com/"
          >
            Releevant. All Rights Reserved
          </a>
        </div>
      </footer>
    </div>
  );
}

export default FooterRel;