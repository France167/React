import { createContext, useContext, useState, useEffect } from "react";

const globalContext = createContext({
  peliculas: [],
  setPeliculas: () => {},
  currentMovies: []
});

export const useGlobalContext = () => {
  return useContext(globalContext);
};

export function GlobalContextProvider({ children }) {
  const [peliculas, setPeliculas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(20)

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US`
        );
        let json = await response.json();
        json = json.results;
        setPeliculas(json);
      }
      fetchApi();
    },
    []
  );

  //Get current movie
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = peliculas.slice(indexOfFirstMovie,indexOfLastMovie);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const value = {
    peliculas,
    setPeliculas,
    currentMovies
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
