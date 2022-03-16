import { useState } from "react";

export default function Login({ handleLogin }) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  /* const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
 */
  function handleSubmit(e) {
    e.preventDefault();
    if (user.name === "Francesco" && user.password === "1234") {
      handleLogin(true);
      setErrorMessage(false);
    } else {
      handleLogin(false);
      setErrorMessage(true);
    }
  }

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  /* function handleUsername(e) {
    setUserName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  } */

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <strong>Username</strong>
          </label>
          <br />
          <input onChange={handleInput} type="text" name="name" />
          <br />
          <br />
          <label>
            <strong>Password</strong>
          </label>
          <br />
          <input onChange={handleInput} type="password" name="password" />
          <br />
          {errorMessage && <p> Username or password are incorrect!! </p>}
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
