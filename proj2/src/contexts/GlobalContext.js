import { createContext, useContext, useState, useEffect } from "react";

const globalContext = createContext({
  alumnos: [],
  setAlumnos: () => {},
  promocion1: [],
  setPromocion1: () => {},
  promocion2: [],
  setPromocion2: () => {},
  alumni: [],
  setAlumni: () => {},
  candidatos: [],
  setCandidatos: () => {},
  eventos: [],
  setEventos: () => {},
});

export const useGlobalContext = () => {
  return useContext(globalContext);
};

export function GlobalContextProvider({ children }) {
  const [alumnos, setAlumnos] = useState([]);
  const [promocion1, setPromocion1] = useState([]);
  const [promocion2, setPromocion2] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [candidatos, setCandidatos] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [filtros, setFiltros] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:8080/", {
        mode: "cors",
      });
      let json = await response.json();
      setAlumnos(json);
    }

    fetchApi();
  }, []);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:8080/promocion1", {
        mode: "cors",
      });
      let json = await response.json();
      setPromocion1(json);
    }

    fetchApi();
  }, []);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:8080/promocion2", {
        mode: "cors",
      });
      let json = await response.json();
      setPromocion2(json);
    }

    fetchApi();
  }, []);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:8080/alumni", {
        mode: "cors",
      });
      let json = await response.json();
      setAlumni(json);
    }

    fetchApi();
  }, []);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:8080/candidatos", {
        mode: "cors",
      });
      let json = await response.json();
      setCandidatos(json);
    }

    fetchApi();
  }, []);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("http://localhost:8080/eventos", {
        mode: "cors",
      });
      let json = await response.json();
      setEventos(json);
    }

    fetchApi();
  }, []);

  const value = {
    alumnos,
    setAlumnos,
    promocion1,
    setPromocion1,
    promocion2,
    setPromocion2,
    alumni,
    setAlumni,
    candidatos,
    setCandidatos,
    eventos,
    setEventos,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
