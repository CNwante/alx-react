import {
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";
import {
  fetchNotificationsSuccess,
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";

describe("Test for Notifications Action Creators", () => {
  test("Calling fetchNotificationsSuccess returns the correct notification data", () => {
    const notifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" },
    ];

    const expectedResult = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
    };

    expect(fetchNotificationsSuccess(notifications)).toEqual(expectedResult);
  });

  test("Calling markAsRead with 1 as an argument should return the correct object", () => {
    const expectedResult = {
      type: "MARK_AS_READ",
      index: 1,
    };
    expect(markAsRead(1)).toEqual(expectedResult);
  });

  test("Calling setNotificationFilter with DEFAULT filter returns the correct object", () => {
    const expectedResult = {
      type: "SET_TYPE_FILTER",
      filter: "DEFAULT",
    };

    const filter = setNotificationFilter(NotificationTypeFilters["DEFAULT"]);
    expect(filter).toEqual(expectedResult);
  });
});
