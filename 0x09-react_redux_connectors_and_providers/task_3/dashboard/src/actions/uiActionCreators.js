import * as uiActionTypes from "./uiActionTypes.js";

export const login = (email, password) => {
  return {
    type: uiActionTypes.LOGIN,
    user: { email, password },
  };
};

export const boundLogin = (email, password) => (dispatch) =>
  dispatch(login(email, password));

export const loginSuccess = (user) => ({ type: uiActionTypes.LOGIN_SUCCESS, user });
export const loginFailure = () => ({ type: uiActionTypes.LOGIN_FAILURE });

// Async action creator for login
export const loginRequest = (email, password) => {
  return (dispatch) => {
    boundLogin(email, password);

    return fetch("/login-success.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API failure");
        }
        return response.json();
      })
      .then((data) => {
        const user = { email };
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        console.error("Error during login request:", error);
        dispatch(loginFailure());
      });
  };
};


export const logout = () => ({ type: uiActionTypes.LOGOUT });

export const boundLogout = () => (dispatch) => dispatch(logout());

export const displayNotificationDrawer = () => {
  return { type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER };
};

export const boundDisplayNotificationDrawer = () => (dispatch) =>
  dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => {
  return { type: uiActionTypes.HIDE_NOTIFICATION_DRAWER };
};

export const boundHideNotificationDrawer = () => (dispatch) =>
  dispatch(hideNotificationDrawer());
