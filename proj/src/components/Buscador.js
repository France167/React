import { useState, useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Search() {
  const { setAlumnos, setAlumni, setCandidatos, setEventos } =
    useGlobalContext();
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

  useEffect(
    function () {
      async function fetchApi() {
        let url = encodeURI(`http://localhost:8080/buscar/alumni/${inputText}`);
        let response = await fetch(url, {
          mode: "cors",
        });
        let json = await response.json();
        setAlumni(json);
      }
      async function fetchAlumni() {
        let response = await fetch("http://localhost:8080/alumni", {
          mode: "cors",
        });
        let json = await response.json();
        setAlumni(json);
      }
      if (inputText !== "") {
        fetchApi();
      }
      if (inputText === "") {
        fetchAlumni();
      }
    },
    [inputText, setAlumni]
  );

  useEffect(
    function () {
      async function fetchApi() {
        let url = encodeURI(
          `http://localhost:8080/busca/candidatos/${inputText}`
        );
        let response = await fetch(url, {
          mode: "cors",
        });
        let json = await response.json();
        setCandidatos(json);
      }
      async function fetchCandidatos() {
        let response = await fetch("http://localhost:8080/candidatos", {
          mode: "cors",
        });
        let json = await response.json();
        setCandidatos(json);
      }
      if (inputText !== "") {
        fetchApi();
      }
      if (inputText === "") {
        fetchCandidatos();
      }
    },
    [inputText, setCandidatos]
  );

  useEffect(
    function () {
      async function fetchApi() {
        let url = encodeURI(
          `http://localhost:8080/buscar/eventos/${inputText}`
        );
        let response = await fetch(url, {
          mode: "cors",
        });
        let json = await response.json();
        setEventos(json);
      }
      async function fetchEventos() {
        let response = await fetch("http://localhost:8080/eventos", {
          mode: "cors",
        });
        let json = await response.json();
        setEventos(json);
      }
      if (inputText !== "") {
        fetchApi();
      }
      if (inputText === "") {
        fetchEventos();
      }
    },
    [inputText, setEventos]
  );

  return (
    <div>
      <form className="d-flex mb-5">
        <input
          onChange={search}
          className="form-control m w-75 m-auto"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          value={inputText}
        />
      </form>
    </div>
  );
}
