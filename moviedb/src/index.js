import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Peliculas from "./views/Peliculas";
import Details from "./views/Details";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Peliculas />} />
        <Route path="details/:id" element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
