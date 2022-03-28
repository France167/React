import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
