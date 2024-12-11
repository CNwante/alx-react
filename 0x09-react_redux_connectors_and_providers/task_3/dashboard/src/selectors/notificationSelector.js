export const filterTypeSelected = (state) => state.filter;

export const getNotifications = (state) => {
  return state.notifications.reduce((acc, notification) => {
    acc[notification.id] = notification;
    return acc;
  }, {});
};

export const getUnreadNotifications = (state) => {
  return state.notifications.reduce((acc, notification) => {
    if (!notification.isRead) {
      acc[notification.id] = notification;
    }
    return acc;
  }, {});
};
