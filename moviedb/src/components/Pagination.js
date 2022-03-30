import { useGlobalContext } from "../context/GlobalContext";

export default function Pagination() {
  const { changePage, pages } = useGlobalContext();
  const pageNumbers = [];
 
 

  for (let i = 1; i <= 22; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="position-relative">
      <nav
        aria-label="Page navigation example"
        className="position-absolute top-0 start-50 translate-middle"
      >
        <ul className="pagination">
          <li className="page-item">
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
          <li className="page-item">
            <span className="page-link">Next </span>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
