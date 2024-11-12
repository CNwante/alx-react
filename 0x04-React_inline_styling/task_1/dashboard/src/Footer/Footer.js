import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {getFullYear, getFooterCopy} from '../utils/utils';

const Footer = () => {
  return (
    <footer className={css(styles.appFooter)} role='contentinfo'>
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
});

export default Footer;
