import { useLoginContext } from "../contexts/LoginContext";

export default function Detail() {
  const { userLogged, logout } = useLoginContext();
  return (
    <div className="my-5">
      <h1>Welcome {userLogged.email}</h1>
      <button className="btn btn-danger mt-5 w-25" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}
