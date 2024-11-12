import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  // Only update when listNotifications has more items than before
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

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
                {listNotifications.length === 0 ? (
                  <li>No new notification for now</li>
                ) : (
                  listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Notifications;
