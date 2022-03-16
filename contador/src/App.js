import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nacho");
  function handleCounter() {
    setCount(count + 1);
  }
  function handleName() {
    setName("Angel");
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>Counter : {count}</h2>
      <button onClick={handleCounter}>Pulsame</button>
      <h2>Name : {name}</h2>
      <button onClick={handleName}>Pulsame</button>
      <br />
      <input type="text" onChange={handleChange} />
    </div>
  );
}
