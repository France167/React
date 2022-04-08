import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./context/AuthContext";
import { GlobalContextProvider } from "./context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <GlobalContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </GlobalContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
