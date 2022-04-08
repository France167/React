import { Link } from "react-router-dom";

function Missing() {
  return (
    <div>
      <h2>OPSSS!!</h2>
      <p>Page not found!</p>
      <Link to="/"> Go back to our Home page! </Link>
    </div>
  );
}

export default Missing;
