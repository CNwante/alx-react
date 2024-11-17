import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <main className={css(styles.loginBody)} data-testid="Login">
      <p className={css(styles.title)}>Login to access the full dashboard</p>

      <div className={css(styles.inputGroup)}>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input type="text" id="email" name="email" className={css(styles.input)} />
      </div>

      <div className={css(styles.inputGroup)}>
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input type="password" id="password" name="password" className={css(styles.input)} />
      </div>

      <button type="button" className={css(styles.button)}>OK</button>
    </main>
  );
};

const styles = StyleSheet.create({
  loginBody: {
    flexGrow: 1,
    paddingTop: '2em',
    paddingLeft: '2em',
    paddingRight: '2em',
    '@media (max-width: 900px)': {
      padding: '1em',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: '1em',
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  label: {
    marginBottom: '0.5em',
    fontWeight: 'bold',
    '@media (min-width: 900px)': {
      marginBottom: 0,
      marginRight: '1em',
    },
  },
  input: {
    padding: '0.5em',
    fontSize: '1em',
    '@media (min-width: 900px)': {
      flexGrow: 1,
    },
  },
  button: {
    padding: '0.5em 1em',
    fontSize: '1em',
    marginTop: '1em',
    cursor: 'pointer',
  },
});

export default Login;
