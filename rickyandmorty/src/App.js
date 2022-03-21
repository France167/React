import "./App.css";
import "./components/Card.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Nav />
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
