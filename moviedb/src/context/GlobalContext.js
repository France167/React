import { createContext, useContext, useState, useEffect } from "react";

const globalContext = createContext({
  peliculas: [],
  setPeliculas: () => {},
  changePage: () => {},
  pages: 1,
});

export const useGlobalContext = () => {
  return useContext(globalContext);
};

export function GlobalContextProvider({ children }) {
  const [peliculas, setPeliculas] = useState([]);
  const [pages, setPages] = useState(1);

  function changePage(num) {
    setPages(num);
  }

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US&page=${pages}`
        );
        let json = await response.json();
        json = json.results;
        setPeliculas(json);
      }
      fetchApi();
    },
    [pages]
  );

  const value = {
    peliculas,
    setPeliculas,
    changePage,
    pages,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
