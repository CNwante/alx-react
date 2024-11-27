import * as uiActionTypes from "./uiActionTypes.js";
import * as uiActionCreators from "./uiActionCreators.js";

describe("Test for UI Action Creators", () => {
  test("login returns type: LOGIN and user: { email, password }", () => {
    const expectedResult = {
      type: uiActionTypes.LOGIN,
      user: { email: "solomonchuks@gmail.com", password: "Chuks123" },
    };
    const login = uiActionCreators.login("solomonchuks@gmail.com", "Chuks123");
    expect(login).toEqual(expectedResult);
  });

  test("logout returns type: LOGOUT", () => {
    const expectedResult = { type: uiActionTypes.LOGOUT };
    const logout = uiActionCreators.logout();
    expect(logout).toEqual(expectedResult);
  });

  test("displayNotificationDrawer returns the correct type", () => {
    const expectedResult = { type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER };
    const displayNotfication = uiActionCreators.displayNotificationDrawer();
    expect(displayNotfication).toEqual(expectedResult);
  });

  test("hideNotificationDrawer returns the correct type", () => {
    const expectedResult = { type: uiActionTypes.HIDE_NOTIFICATION_DRAWER };
    const hideNotfication = uiActionCreators.hideNotificationDrawer();
    expect(hideNotfication).toEqual(expectedResult);
  });
});
