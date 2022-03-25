import { useState } from "react";
import { useLoginContext } from "../contexts/LoginContext";

export default function Login() {
  const { login, errorMessage } = useLoginContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <form className="form-group w-50 my-5" onSubmit={handleSubmit}>
      <h1 className="my-4">Login</h1>
      <input
        className="form-control mb-3 "
        type="text"
        name="email"
        value={user.email}
        placeholder="Introduce email"
        onChange={handleUser}
      />
      <input
        className="form-control mb-3 "
        type="text"
        name="password"
        value={user.password}
        placeholder="Introduce contraseña"
        onChange={handleUser}
      />
      <input
        className="form-control mb-3  ml-auto btn-success"
        type="submit"
        value="Iniciar sesión"
      />
      {errorMessage !== "" && (
        <h2>Error al introducir el email o la paswword</h2>
      )}
    </form>
  );
}
