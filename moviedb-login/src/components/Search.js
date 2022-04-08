import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function Search() {
  const { setPeliculas } = useGlobalContext();
  const [inputText, setInputText] = useState("");
  const debouncedSearch = useDebounce(inputText, 300);

  function search(e) {
    setInputText(e.target.value);
  }

  useEffect(
    function () {
      async function fetchApi() {
        let response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US&query=%22${debouncedSearch}%22&page=1&include_adult=false`
        );
        let json = await response.json();
        json = json.results;
        setPeliculas(json);
      }
      async function fetchPrimeraPeliculas() {
        let response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US`
        );
        let json = await response.json();
        json = json.results;
        setPeliculas(json);
      }
      if (debouncedSearch !== "") {
        fetchApi();
      }
      if (debouncedSearch === "") {
        fetchPrimeraPeliculas();
      }
    },
    [inputText, setPeliculas, debouncedSearch]
  );

  return (
    <form className="d-flex mt-5">
      <input
        onChange={search}
        className="form-control me-2 w-100 m-auto"
        type="search"
        placeholder="Search a movie"
        aria-label="Search"
        value={inputText}
      />
    </form>
  );
}
