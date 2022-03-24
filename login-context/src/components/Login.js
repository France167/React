import  UserContext  from "../contexts/UserContext";
import {useContext} from "react"

export default function Login() {
const {loggedUser, user} = useContext(UserContext)

function handleUser(e) {
  loggedUser({ ...user, [e.target.name]: e.target.value });
}
  return (
    <div>
      <h1>Login</h1>
      <form className="form-control" onSubmit={loggedUser(user)}>
      <div className="mb-3 w-50 m-auto mt-5">
       
        <input
        onChange={handleUser}
        name="email"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3 w-50 m-auto my-5">
        
        <input
        onChange={handleUser}
        name="password"
          type="password"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Password"
        />
      </div>
      <button type="button" className="btn btn-secondary my-3">
        Login
      </button>
      </form>
    </div>
  );
}
