export default function LogInOut() {
  const loggedIn = true;

  if (loggedIn) {
    return (
      <div>
        <h2>You are logged in</h2>
        <button>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Please sign in</h2>
        <button>Sign In</button>
      </div>
    );
  }
}
