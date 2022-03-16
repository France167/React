import "./App.css";
import Agenda from "./components/Agenda";
import Formulario from "./components/Formulario";
import { useState } from "react";

const contactos = [
  {
    id: 1,
    nombre: "Adrian",
    apellido: "Molina",
    direccion: "Calle Lario 2",
    ciudad: "Malaga",
    cod: "29130",
    telefono: "654786907",
  },
  {
    id: 2,
    nombre: "Francesco",
    apellido: "Fava",
    direccion: "Calle Oceanio 1",
    ciudad: "Madrid",
    cod: "29003",
    telefono: "654567890",
  },
  {
    id: 3,
    nombre: "Nacho",
    apellido: "Viano",
    direccion: "Calle Indico 3",
    ciudad: "Cordoba",
    cod: "29456",
    telefono: "6547567856",
  },
];

function App() {
  const [usuarios, setUsuarios] = useState(contactos);
  return (
    <div className="App">
      <Agenda contactos={usuarios} setUsuarios={setUsuarios} />
      <Formulario setUsuarios={setUsuarios} />
    </div>
  );
}

export default App;
