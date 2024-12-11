import { Map } from "immutable";
import * as uiActions from "../actions/uiActionTypes";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
});

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActions.DISPLAY_NOTIFICATION_DRAWER: {
      return state.set("isNotificationDrawerVisible", true);
    }

    case uiActions.HIDE_NOTIFICATION_DRAWER: {
      return state.set("isNotificationDrawerVisible", false);
    }

    case uiActions.LOGIN_SUCCESS: {
      return state.merge({
        isUserLoggedIn: true,
        user: action.user,
      });
    }

    case uiActions.LOGIN_FAILURE: {
      return state.merge({
        isUserLoggedIn: false,
        user: null,
      });
    }

    case uiActions.LOGOUT: {
      return state.merge({
        isUserLoggedIn: false,
        user: null,
      });
    }

    default:
      return state;
  }
};
