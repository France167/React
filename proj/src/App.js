import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Alumnos from "./views/Alumnos";

function App() {
  return (
    <div className="Ap">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
