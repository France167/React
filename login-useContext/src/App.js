import "./App.css";
import Home from "./components/Home";
import { LoginContextProvider } from "./contexts/LoginContext";

function App() {
  return (
    <LoginContextProvider>
      <div className="App">
        <Home />
      </div>
    </LoginContextProvider>
  );
}

export default App;
