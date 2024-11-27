import * as uiActionTypes from "./uiActionTypes.js";

export const login = (email, password) => {
  return {
    type: uiActionTypes.LOGIN,
    user: { email, password },
  };
};

export const logout = () => ({ type: uiActionTypes.LOGOUT });

export const displayNotificationDrawer = () => {
  return { type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER };
};

export const hideNotificationDrawer = () => {
  return { type: uiActionTypes.HIDE_NOTIFICATION_DRAWER };
};
