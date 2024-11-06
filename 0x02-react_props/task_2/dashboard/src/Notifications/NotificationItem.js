import React from "react";

function NotificationItem({ type, html, value }) {
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

export default NotificationItem;
