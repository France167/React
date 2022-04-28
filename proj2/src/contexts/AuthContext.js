import { createContext, useState, useContext } from "react";

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

  function logout() {
    setAuth(null);
    setErrorMessage("");
  }

  async function fetchApi(user) {
    let response = await fetch("http://localhost:8080/login", {
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
