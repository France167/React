export default function Card({ url, title, paragraph, link, buttonText }) {
  function handleClick(nombre) {
    return function (event) {
      alert("Bienvenido a releevant " + nombre + "!");
      console.log("Boton pulsado: " + event.target.innerText);
    };
  }
  return (
    <div class="flex">
      <div className="card mt-5 mx-auto">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{paragraph}</p>
          {/*  <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark"
          >
            {buttonText}
          </a> */}
          <button
            className="btn btn-outline-dark"
            onClick={handleClick("Francesco")}
          >
            Saludar
          </button>
        </div>
      </div>
      <div className="card mt-5 mx-auto">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{paragraph}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark"
          >
            {buttonText}
          </a>
        </div>
      </div>
      <div className="card mt-5 mx-auto">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{paragraph}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark"
          >
            {buttonText}
          </a>
        </div>
      </div>
      <div className="card mt-5 mx-auto">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{paragraph}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
