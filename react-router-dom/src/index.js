import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./views/Inicio/Inicio";
import Contacto from "./views/Contacto/Contacto";
import NoEncontrada from "./views/NoEncontrada/NoEncontrada";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
