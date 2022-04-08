import { createContext, useContext, useState, useEffect } from "react";

const globalContext = createContext({
  peliculas: [],
  setPeliculas: () => {},
  changePage: () => {},
  pages: 1,
  nextPage: () => {},
  previewsPage: () => {},
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

  function nextPage(num) {
    if (num === 1) {
      setPages(pages + 1);
    }
  }

  function previewsPage(num) {
    if (num === 0) {
      setPages(pages - 1);
    }
  }

  useEffect(
    function () {
      async function fetchApi() {
        console.log(pages);
        let response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US&page=${pages}`
        );
        let json = await response.json();
        let data = json.results;
        setPeliculas(data);
        if (pages !== Number(json.page)) {
          setPages(json.page);
        }
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
    nextPage,
    previewsPage,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
