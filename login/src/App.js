import "./App.css";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? <h1>Welcome to our app</h1> : <h1>Login in our app</h1>}
      <Login handleLogin={setIsLoggedIn} />
    </div>
  );
}

export default App;
