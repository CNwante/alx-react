import { uiReducer, initialState } from "./uiReducer";
import * as uiActions from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("should return the initial state when no action is passed", () => {
    const newState = uiReducer(undefined, {});
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it("should return the initial state when a wrong action is passed", () => {
    const newState = uiReducer(initialState, { type: "SELECT_COURSE" });
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it("should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const newState = uiReducer(initialState, {
      type: uiActions.DISPLAY_NOTIFICATION_DRAWER,
    });

    expect(newState).toEqual(initialState.set("isNotificationDrawerVisible", true));
  });

  it("should set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed", () => {
    const prevState = initialState.set("isNotificationDrawerVisible", true);

    const newState = uiReducer(prevState, {
      type: uiActions.HIDE_NOTIFICATION_DRAWER,
    });

    expect(newState).toEqual(initialState.set("isNotificationDrawerVisible", false));
  });

  it("should set isUserLoggedIn to true and update user when LOGIN_SUCCESS is passed", () => {
    const user = { email: "test@example.com", name: "Test User" };
    const newState = uiReducer(initialState, { type: uiActions.LOGIN_SUCCESS, user });
    expect(newState).toEqual(
      initialState.merge({
        isUserLoggedIn: true,
        user,
      })
    );
  });

  it("should set isUserLoggedIn to false and clear user when LOGIN_FAILURE is passed", () => {
    const newState = uiReducer(initialState, { type: uiActions.LOGIN_FAILURE });
    expect(newState).toEqual(
      initialState.merge({
        isUserLoggedIn: false,
        user: null,
      })
    );
  });

  it("should set isUserLoggedIn to false and clear user when LOGOUT is passed", () => {
    const prevState = initialState.merge({
      isUserLoggedIn: true,
      user: { email: "test@example.com", name: "Test User" },
    });
    const newState = uiReducer(prevState, { type: uiActions.LOGOUT });
    expect(newState).toEqual(
      initialState.merge({
        isUserLoggedIn: false,
        user: null,
      })
    );
  });
});
