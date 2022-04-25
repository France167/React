import "./App.css";
import { Route, Routes } from "react-router-dom";
import Alumnos from "./views/Alumnos";
import Detalles from "./views/Detalles";
import Error from "./views/Error";
import Update from "./views/Update";
import AnadirAlumno from "./views/AnadirAlumno";
import SendAlumni from "./views/SendAlumni";
import Alumni from "./views/Alumni";
import DetallesAlumni from "./views/DetallesAlumni";
import UpdateAlumni from "./views/UpdateAlumni";
import Docentes from "./views/Docentes";
import AnadirDocente from "./views/AnadirDocente";
import Expertos from "./views/Expertos";
import AnadirExperto from "./views/AnadirExperto";
import Candidatos from "./views/Candidatos";
import AnadirCandidato from "./views/AnadirCandidato";
import Eventos from "./views/Eventos";
import AnadirEvento from "./views/AnadirEvento";
import UpdateEvento from "./views/UpdateEvento";
import UpdateCandidato from "./views/UpdateCandidato";
import Layout from "./components/Layout";
import Login from "./views/Login";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route index element={<Alumnos />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="anadir" element={<AnadirAlumno />} />
          <Route path="detalles/:_id" element={<Detalles />} />
          <Route path="update/:_id" element={<Update />} />
          <Route path="update/alumni/:_id" element={<UpdateAlumni />} />
          <Route path="send/:_id" element={<SendAlumni />} />
          <Route path="detalles/alumni/:_id" element={<DetallesAlumni />} />
          <Route path="docentes" element={<Docentes />} />
          <Route path="anadirdocente" element={<AnadirDocente />} />
          <Route path="expertos" element={<Expertos />} />
          <Route path="anadirexperto" element={<AnadirExperto />} />
          <Route path="candidatos" element={<Candidatos />} />
          <Route path="anadircandidato" element={<AnadirCandidato />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="anadirevento" element={<AnadirEvento />} />
          <Route path="updateevento/:_id" element={<UpdateEvento />} />
          <Route path="updatecandidato/:_id" element={<UpdateCandidato />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
