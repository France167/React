import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

export default function Pagination() {
  const { changePage, pages, nextPage, previewsPage } = useGlobalContext();
  const pageNumbers = [];
  const [pagination, setPagination] = useState({});

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=1ac2aba9270704bf465b9c3a770cb6f8&language=en-US`
      );
      let json = await response.json();
      setPagination(json);
    }
    fetchApi();
  }, []);

  for (let i = 1; i <= pagination.total_pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="position-relative">
      <nav
        aria-label="Page navigation example"
        className="position-absolute top-0 start-50 translate-middle"
      >
        <ul className="pagination">
          <li onClick={() => previewsPage(0)} className="page-item">
            <span className="page-link">Previews</span>
          </li>
          {pageNumbers.map((number) => (
            <li
              onClick={() => changePage(number)}
              key={number}
              className={pages === number ? "page-item active" : "page-item"}
            >
              <span className="page-link"> {number} </span>
            </li>
          ))}
          <li onClick={() => nextPage(1)} className="page-item">
            <span className="page-link">Next </span>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
