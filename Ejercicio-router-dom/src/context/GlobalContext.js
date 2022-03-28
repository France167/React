import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const globalContext = createContext({
  contactos: [],
  setContactos: () => {},
  todos: [],
  setTodos: () => {},
  characters: [],
  setCharacters: () => {},
});

export const useGlobalContext = () => {
  return useContext(globalContext);
};

export function GlobalContextProvider({ children }) {
  const [contactos, setContactos] = useState([
    {
      id: 1,
      nombre: "Adrian",
      apellido: "Molina",
      direccion: "Calle Lario 2",
      ciudad: "Malaga",
      cod: "29130",
      telefono: "654786907",
    },
    {
      id: 2,
      nombre: "Francesco",
      apellido: "Fava",
      direccion: "Calle Oceanio 1",
      ciudad: "Madrid",
      cod: "29003",
      telefono: "654567890",
    },
    {
      id: 3,
      nombre: "Nacho",
      apellido: "Viano",
      direccion: "Calle Indico 3",
      ciudad: "Cordoba",
      cod: "29456",
      telefono: "6547567856",
    },
  ]);
  const [todos, setTodos] = useState([]);
  const [characters, setCharacters] = useState([]);

  useFetch("https://jsonplaceholder.typicode.com/todos", setTodos);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("https://rickandmortyapi.com/api/character");
      let json = await response.json();
      json = json.results;
      setCharacters(json.splice(0, 20));
    }
    fetchApi();
  }, []);

  const value = {
    contactos,
    setContactos,
    todos,
    setTodos,
    characters,
    setCharacters,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
