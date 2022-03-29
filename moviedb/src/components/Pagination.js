import { useGlobalContext } from "../context/GlobalContext";

export default function Pagination() {
const { moviesPerPage, total_results } = useGlobalContext()
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total_results / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
