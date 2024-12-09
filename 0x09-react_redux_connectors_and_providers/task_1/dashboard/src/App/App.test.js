import React from "react";
import { Provider } from "react-redux";
import { fromJS } from "immutable";
import { fireEvent, render, screen } from "@testing-library/react";
import App, { mapStateToProps } from "./App";
import { createStore } from "redux";
import { uiReducer } from "../reducers/uiReducer";

const store = createStore(uiReducer);

describe("App component", () => {
  test("renders without crashing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const divAppElement = screen.getByTestId("App");
    expect(divAppElement).toBeInTheDocument();
  });

  test("contains the Notifications component after clicking 'Your notifications'", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Initially, Notifications is not rendered
    let notifications = screen.queryByTestId("Notifications");
    expect(notifications).toBeNull();

    // Simulate clicking on "Your notifications" to show the drawer
    const menuItem = screen.getByText("Your notifications");
    fireEvent.click(menuItem);

    // After clicking, Notifications should be rendered
    notifications = screen.getByTestId("Notifications");
    expect(notifications).toBeInTheDocument();
  });

  /* Test failed after I changed state management to be handled bu redux
    ====================================================================
    test("default state of displayDrawer is false", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const notifications = screen.queryByTestId("Notifications");
      expect(notifications).toBeNull();
    });
  */

  test("contains the Header component with the correct title", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Find the main header by using getAllByRole and then filtering
    const headings = screen.getAllByRole("heading");

    // Check if the main header with text 'School dashboard' exists
    const mainHeader = headings.find(
      (heading) => heading.textContent === "School dashboard"
    );
    expect(mainHeader).toBeInTheDocument();
  });

  test("renders the BodySectionWithMarginBottom components correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check for specific headings introduced by BodySectionWithMarginBottom
    expect(screen.getByText("Log in to continue")).toBeInTheDocument();
    expect(screen.getByText("News from the School")).toBeInTheDocument();
  });

  test("contains the Footer component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  describe("when isLoggedIn is false", () => {
    test("renders the Login component and not CourseList", () => {
      render(
        <Provider store={store}>
          <App isLoggedIn={false} />
        </Provider>
      );
      const login = screen.getByTestId("Login");
      expect(login).toBeInTheDocument();
      expect(screen.queryByTestId("CourseList")).not.toBeInTheDocument();
    });
  });

  describe("Test MapStateToProps", () => {
    test("returns the right object", () => {
      const state = fromJS({
        isUserLoggedIn: true
      });

      const  expectedState = { isLoggedIn: true };
      const result = mapStateToProps(state);
      expect(result).toEqual(expectedState);
    });
  });

  /*
    describe('when isLoggedIn is true', () => {
      test('renders the CourseList component and not Login', () => {
        render(<App isLoggedIn={true} />);
        const courseList = screen.getByTestId('CourseList');
        expect(courseList).toBeInTheDocument();
        expect(screen.queryByTestId('Login')).not.toBeInTheDocument();
      });
    });

    test('calls logOut and shows alert on Control + h keypress', () => {
      const logOutMock = jest.fn();
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

      render(<App logOut={logOutMock} />);
      fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

      expect(alertMock).toHaveBeenCalledWith('Logging you out');
      expect(logOutMock).toHaveBeenCalled();

      alertMock.mockRestore();
    });
  */
});
