import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.png";
import { logout } from "../actions/uiActionCreators";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    height: "200px",
  },
  title: {
    fontSize: "2.5rem",
    color: "rgb(194, 79, 79)",
  },
  logoutSection: {
    marginTop: "10px",
    fontSize: "1rem",
    color: "gray",
  },
  logoutLink: {
    cursor: "pointer",
    color: "blue",
    textDecoration: "underline",
  },
});

const Header = ({ user, logout }) => {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="holberton-logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
      {user && (
        <div id="logoutSection" className={css(styles.logoutSection)}>
          Welcome {user.email} (
          <span className={css(styles.logoutLink)} onClick={logout}>
            logout
          </span>
          )
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export const mapStateToProps = (state) => ({
  user: state.get("user"),
});

export default connect(mapStateToProps, { logout })(Header);
