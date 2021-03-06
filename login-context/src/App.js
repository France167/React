import "./App.css";
import Home from "./components/Home";

import { LoginContextProvider } from "./contexts/LoginContext";

export default function App() {
  return (
    <LoginContextProvider>
      <div className="App d-flex justify-content-center">
        <Home />
      </div>
    </LoginContextProvider>
  );
}
