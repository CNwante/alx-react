import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const headerStyle = { backgroundColor: "#deb5b545" };
const rowStyle = { backgroundColor: "#f5f5f5ab" };

const styles = StyleSheet.create({

  header: {
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  return (
    <tr style={isHeader ? headerStyle : rowStyle}>
      {isHeader ? (
        textSecondCell ? (
          <>
            <th className={css(styles.header)}>{textFirstCell}</th>
            <th className={css(styles.header)}>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan="2">{textFirstCell}</th>
        )
      ) : (
        <>
          <td className={css(styles.header)}>{textFirstCell}</td>
          <td className={css(styles.header)}>{textSecondCell}</td>
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
