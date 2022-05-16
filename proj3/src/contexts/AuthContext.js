import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  auth: {},
  login: () => {},
  logout: () => {},
  errorMessage: "",
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  function logout() {
    setAuth(null);
    window.localStorage.removeItem("loggedIn");
    setErrorMessage("");
    navigate("/inicio");
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedIn");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setAuth(user);
    }
  }, []);

  async function fetchApi(user) {
    let response = await fetch("http://localhost:3001/login", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    let json = await response.json();
    console.log(json);
    window.localStorage.setItem("loggedIn", JSON.stringify(json));
    setAuth(json);
  }

  async function login(user) {
    await fetchApi(user);
    if (auth) {
      setAuth(user);
      setErrorMessage("");
    } else {
      setErrorMessage("Error a introducir credenciales!!");
    }
  }

  const value = {
    auth,
    login,
    errorMessage,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
