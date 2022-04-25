import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Alumnos from "./views/Alumnos";
import Detalles from "./views/Detalles";
import Error from "./views/Error";
import Update from "./views/Update";
import AnadirAlumno from "./views/AnadirAlumno";
import SendAlumni from "./views/SendAlumni";
import Alumni from "./views/Alumni";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Alumnos />} />
        <Route path="alumni" element={<Alumni />} />
        <Route path="anadir" element={<AnadirAlumno />} />
        <Route path="detalles/:_id" element={<Detalles />} />
        <Route path="update/:_id" element={<Update />} />
        <Route path="send/:_id" element={<SendAlumni />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
