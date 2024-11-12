import React from "react";
import { StyleSheet, css } from 'aphrodite';
import logo from "../assets/holberton-logo.png";

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '200px',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--app-primary-color)',
  },
});

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="holberton-logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
};

export default Header;
