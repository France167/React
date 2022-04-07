import { useState, useEffect, useCallback, useRef } from "react";
import { useAuthContext } from "../contexts/AuthContext";
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

  useEffect(function(){
    return userRef.current.focus();
  },[])

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
    setUser({ email: "", password: "" });
    navigate(from, {replace: true});
  }

  return (
    <section>
      <p
        className={errorMessage ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errorMessage}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Username:</label>
        <input
          type="text"
          id="email"
          name="email"
          ref={userRef}
          autoComplete="off"
          onChange={handleInputs}
          value={user.email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputs}
          value={user.password}
          required
        />
        <button className="btn btn-primary mt-3">Sign In</button>
      </form>
    </section>
  );
}

export default Login;
