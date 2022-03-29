import { createContext, useContext, useState, useEffect } from "react";

const globalContext = createContext({
  peliculas: [],
  setPeliculas: () => {},
});

export const useGlobalContext = () => {
  return useContext(globalContext);
};

export function GlobalContextProvider({ children }) {
  const [peliculas, setPeliculas] = useState([]);
  const [page, setPage] = useState({ current: 1, total: null });

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US&page=${page}`
        );
        let json = await response.json();
        json = json.results;
        setPeliculas(json);
      }
      fetchApi();
    },
    [page]
  );

  const value = {
    peliculas,
    setPeliculas,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
