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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Alumnos />} />
        <Route path="detalles/:_id" element={<Detalles />}></Route>
        <Route path="update/:_id" element={<Update />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
