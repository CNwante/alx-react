import './Login.css';

const Login = () => {
  return (
    <main className="Login-body" data-testid="Login">
      <p>Login to access the full dashboard</p>

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email"></input>

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"></input>

      <button type="button">OK</button>
    </main>
  );
};

export default Login;
