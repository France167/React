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
  }

  function login(user) {
    if (user.email === "pepe@mail.com" && user.password === "1234") {
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
