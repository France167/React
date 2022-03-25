export default function Detail({ user, logout }) {
  return (
    <div>
      <h1 className="my-4">{`Bienvenido ${user.email}`}</h1>
      <button className="btn btn-danger" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}
