export default function LogInOut() {
  const loggedIn = true;

  if (loggedIn) {
    return (
      <div>
        <h2 class="text-success">You are logged in</h2>
        <button type="button" class="btn btn-primary">Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2 class="text-danger">Please sign in</h2>
        <button type="button" class="btn btn-primary">Login</button>
      </div>
    );
  }
}
