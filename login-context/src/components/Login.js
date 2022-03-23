export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div class="mb-3 w-50 m-auto mt-5">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3 w-50 m-auto my-5">
        <label for="exampleFormControlInput1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Password"
        />
      </div>
      <button type="button" class="btn btn-secondary my-3">
        Login
      </button>
    </div>
  );
}
