import { fromJS } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

export const defaultState = fromJS({
  entities: {
    notifications: {},
    users: {},
    messages: {},
  },
  result: [],
  filter: "DEFAULT",
});

export const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep(fromJS(normalizedData)).setIn(
        ["entities", "notifications"],
        fromJS(
          Object.entries(normalizedData.entities.notifications).reduce(
            (acc, [key, value]) => ({
              ...acc,
              [key]: { ...value, isRead: false },
            }),
            {}
          )
        )
      );
    }

    case SET_TYPE_FILTER: {
      return state.set("filter", action.filter);
    }

    case MARK_AS_READ: {
      return state.setIn(
        ["entities", "notifications", action.index.toString(), "isRead"],
        true
      );
    }

    default:
      return state;
  }
};
