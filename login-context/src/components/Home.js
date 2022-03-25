import { useLoginContext } from "../contexts/LoginContext";
import Detail from "./Detail";
import Login from "./Login";

export default function Home() {
  const { userLogged, logout } = useLoginContext();
  return (
    <>{userLogged ? <Detail user={userLogged} logout={logout} /> : <Login />}</>
  );
}
