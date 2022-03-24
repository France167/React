import { createContext,useState } from "react";


const UserContext = createContext({
  user: {
    email: "",
    password: "",
  },
  loggedUser: () => {},
});

export default UserContext;

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function loggedUser(user) {
    setUser(function () {
      if (user.email === "francesco@mail.com" && user.password === "1234") {
        console.log(user)
        return user;
      }
    });
  }

  const value = {
    user,
    loggedUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
