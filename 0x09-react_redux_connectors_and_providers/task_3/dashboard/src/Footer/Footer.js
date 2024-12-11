import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils";

const Footer = ({ user = null }) => {
  return (
    <footer className={css(styles.appFooter)} role="contentinfo">
      {user && (
        <p>
          <a href="#contact" className={css(styles.contactLink)}>
            Contact us
          </a>
        </p>
      )}
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </footer>
  );
};

const styles = StyleSheet.create({
  appFooter: {
    padding: "1em 0",
    textAlign: "center",
    fontStyle: "italic",
    borderTop: "3px solid rgb(194, 79, 79)",
  },
  contactLink: {
    color: "rgb(194, 79, 79)",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

Footer.propTypes = {
  user: PropTypes.object,
};

export const mapStateToProps = (state) => ({
  user: state.get("user"),
});

export default connect(mapStateToProps)(Footer);
