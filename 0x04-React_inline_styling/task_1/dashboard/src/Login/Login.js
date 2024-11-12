import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <main className={css(styles.loginBody)} data-testid="Login">
      <p>Login to access the full dashboard</p>

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />

      <button type="button">OK</button>
    </main>
  );
};

const styles = StyleSheet.create({
  loginBody: {
    flexGrow: 1,
    paddingTop: '2em',
    paddingLeft: '2em',
  },
});

export default Login;
