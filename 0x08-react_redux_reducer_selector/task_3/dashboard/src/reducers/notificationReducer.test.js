import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationReducer, defaultState } from "./notificationReducer";

describe("notificationReducer", () => {
  it("should return the default state", () => {
    expect(notificationReducer(undefined, {})).toEqual(defaultState);
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ],
    };
    const expectedState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
      ],
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle MARK_AS_READ", () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
      ],
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      ...initialState,
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
      ],
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_TYPE_FILTER", () => {
    const action = { type: SET_TYPE_FILTER, filter: "URGENT" };
    const expectedState = {
      ...defaultState,
      filter: "URGENT",
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });
});
