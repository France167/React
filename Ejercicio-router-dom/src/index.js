import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card1 from "./views/ej-Card"
import Usuarios from "./views/ej-Usuarios"
import Todolist from "./views/ej-Todolist"
import RickMorty from "./views/ej-RickMorty"

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Card1 />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="todolist" element={<Todolist />} />
      <Route path="rickmorty" element={<RickMorty />} />
    </Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

