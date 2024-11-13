import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  dataRow: {
    backgroundColor: "#f5f5f5ab",
  },
  headerCell: {
    borderBottom: "1px solid #ddd",
    textAlign: "left",
  },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  return (
    <tr className={css(isHeader ? styles.headerRow : styles.dataRow)}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.headerCell)}>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan="2">{textFirstCell}</th>
        )
      ) : (
        <>
          <td className={css(styles.headerCell)}>{textFirstCell}</td>
          <td className={css(styles.headerCell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
