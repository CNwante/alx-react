import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer = false }) => {
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
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification()} />
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
