import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

describe("Notification Selector Test", () => {
  const state = {
    filter: "URGENT",
    notifications: [
      { id: 1, type: "default", value: "New course available", isRead: false },
      { id: 2, type: "urgent", value: "New resume available", isRead: true },
      { id: 3, type: "urgent", value: "New data available", isRead: false },
    ],
  };

  test("filterTypeSelected should return the filter value", () => {
    expect(filterTypeSelected(state)).toBe("URGENT");
  });

  test("getNotifications should return all notifications as a Map", () => {
    const expected = {
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    };
    expect(getNotifications(state)).toEqual(expected);
  });

  test("getUnreadNotifications should return only unread notifications as a Map", () => {
    const expected = {
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    };
    expect(getUnreadNotifications(state)).toEqual(expected);
  });
});
