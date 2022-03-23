import "./App.css";
import "./components/Card.css";

import { SwitchModeContextProvider } from "./contexts/SwitchMode";

import Layout from "./components/Layout";

function App() {
  return (
    <SwitchModeContextProvider>
      <Layout />
    </SwitchModeContextProvider>
  );
}

export default App;
