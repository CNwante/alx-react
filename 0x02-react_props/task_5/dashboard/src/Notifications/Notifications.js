import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer = false, listNotifications = [] }) => {
  return (
    <React.Fragment>
      <div className="notificationContainer">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications" data-testid="Notifications">
            <button
              className="Close-btn"
              aria-label="Close"
              style={{ position: "absolute", right: "0", top: "5px" }}
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeIcon} className="Close-icon" alt="close" />
            </button>

            <p>Here is the list of notifications</p>

            <ul>
              {listNotifications === 0 ? (
                 <p>No new notification for now</p>
              ) : (
                listNotifications.map((listNotifications) => <NotificationItem key={listNotifications.id} type={listNotifications.type} value={listNotifications.value} html={listNotifications.html}/>)
              )}
            </ul>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
