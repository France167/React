import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  auth: {},
  login: () => {},
  errorMessage: "",
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function login(user) {
    if (user.email === "pepe@mail.com" && user.password === "1234") {
      setAuth(user);
    } else {
      setErrorMessage("Error a introducir credenciales!!");
    }
  }

  const value = {
    auth,
    login,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
