import { useState, useEffect } from "react";

export default function Search() {
  const [alumnos, setAlumnos] = useState([]);
  const [inputText, setInputText] = useState("");

  function search(e) {
    setInputText(e.target.value);
  }

  useEffect(
    function () {
      async function fetchApi() {
        let url = encodeURI(`http://localhost:8080/busca/${inputText}`);
        let response = await fetch(url, {
          mode: "cors",
        });
        let json = await response.json();
        setAlumnos(json);
      }
      async function fetchAlumnos() {
        let response = await fetch("http://localhost:8080/", {
          mode: "cors",
        });
        let json = await response.json();
        setAlumnos(json);
      }
      if (inputText !== "") {
        fetchApi();
      }
      if (inputText === "") {
        fetchAlumnos();
      }
    },
    [inputText, setAlumnos]
  );

  return (
    <form className="d-flex mb-5">
      <input
        onChange={search}
        className="form-control m w-75 m-auto"
        type="search"
        placeholder="Busca un alumno"
        aria-label="Search"
        value={inputText}
      />
    </form>
  );
}
