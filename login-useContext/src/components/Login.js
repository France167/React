import { useState } from "react";
import { useLoginContext } from "../contexts/LoginContext";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, errorMessage } = useLoginContext();

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }

  function handleUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit} className="form-control w-50 m-auto mt-5">
        <h1>Login</h1>
        <div className="mb-3 row">
          <div className="mb-3">
            <input
              onChange={handleUser}
              name="email"
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={user.email}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="mb-3">
            <input
              onChange={handleUser}
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
              id="inputPassword"
              value={user.password}
            />
          </div>
        </div>
        <button className="btn btn-success mb-3 w-25" type="submit">
          Log In
        </button>
        {errorMessage !== "" && <h2>Tu email o password no son correctas</h2>}
      </form>
    </div>
  );
}
