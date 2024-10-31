import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";

const Notifications = () => {
  return (
    <div className="Notifications">
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notifications;
