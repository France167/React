import Login from "../components/Login";
import UserLogged from "../components/UserLogged";

export default function Home() {
  return (
    <div>
      <h1>I am Home</h1>
      <Login />
      <UserLogged />
    </div>
  );
}
