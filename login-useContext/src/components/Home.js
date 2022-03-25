import { useLoginContext } from "../contexts/LoginContext";
import Login from "./Login";
import Detail from "./Detail";

export default function Home() {
  const { userLogged } = useLoginContext();
  return userLogged ? <Detail /> : <Login />;
}
