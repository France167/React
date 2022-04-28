import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <GlobalContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </GlobalContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
