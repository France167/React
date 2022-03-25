import { useContext, createContext, useState } from "react";

const LoginContext = createContext({
  userLogged: null,
  login: () => {},
  logout: () => {},
  errorMessage: "",
});

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export function LoginContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function login(user) {
    if (user.email === "francesco@mail.com" && user.password === "papapa") {
      setUser(user);
      setErrorMessage("");
    } else {
      setErrorMessage("Tu email o password no estan correctos!");
    }
  }

  function logout() {
    setUser(null);
  }

  const value = {
    userLogged: user,
    login,
    logout,
    errorMessage,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
