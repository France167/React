import { useState, useEffect, useRef } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { login, errorMessage } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const userRef = useRef();

  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(function () {
    return userRef.current.focus();
  }, []);

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
    setUser({ email: "", password: "" });
    navigate(from, { replace: true });
  }

  return (
    <section>
      <p
        className={errorMessage ? "errmsg" : "offscreen"}
        aria-live="assertive"
      ></p>
      <h1 className="mt-5">Sign In</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="mt-3" htmlFor="email">
          Username
        </label>
        <input
          className="form-control w-50 m-auto mt-3 mb-5"
          type="text"
          id="email"
          name="email"
          ref={userRef}
          autoComplete="off"
          onChange={handleInputs}
          value={user.email}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className="form-control w-50 m-auto mt-3 mb-5"
          type="password"
          id="password"
          name="password"
          onChange={handleInputs}
          value={user.password}
          required
        />
        <button className="btn btn-primary mt-3 mb-5 w-25">Sign In</button>
      </form>
      {errorMessage && (
        <h2 className="alert alert-danger w-75 m-auto mb-5">
          {" "}
          {errorMessage}{" "}
        </h2>
      )}
    </section>
  );
}

export default Login;
