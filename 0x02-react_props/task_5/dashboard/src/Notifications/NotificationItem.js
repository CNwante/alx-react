import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type = "default", html, value }) {
  return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? (
        <li
          data-urgent
          data-testid="notification-html"
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      ) : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  value: PropTypes.string,
};

export default NotificationItem;
