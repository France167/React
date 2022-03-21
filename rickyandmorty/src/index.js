import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./views/Card";
import Detalle from "./views/Detalle";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Card />} />
        <Route path="detalle/:id" element={<Detalle />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
