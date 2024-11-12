import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    __html: PropTypes.shape({
      html: PropTypes.string,
    }),
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {
    markAsRead: () => {},
  };

  handleClick = () => {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;

    return (
      <>
        {type && value ? (
          <li data-notification-type={type} onClick={this.handleClick}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            data-urgent
            data-testid="notification-html"
            dangerouslySetInnerHTML={{ __html: html }}
            onClick={this.handleClick}
          ></li>
        ) : null}
      </>
    );
  }
}

export default NotificationItem;
