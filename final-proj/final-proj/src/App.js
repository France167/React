import "./App.css";
import React from "react";
import Alumnos from "./views/Alumnos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Alumnos />
    </div>
  );
}

export default App;
