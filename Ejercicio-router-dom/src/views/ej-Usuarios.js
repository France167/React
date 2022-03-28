import Agenda from "../components/Usuarios/Agenda";
import Formulario from "../components/Usuarios/Formulario";
import { useGlobalContext } from "../context/GlobalContext";

function Usuarios() {
  const { contactos, setContactos } = useGlobalContext();
  return (
    <div className="App">
      <Agenda contactos={contactos} setUsuarios={setContactos} />
      <Formulario setUsuarios={setContactos} />
    </div>
  );
}

export default Usuarios;
