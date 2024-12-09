import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils";
import { AppContext, defaultUser } from "./AppContext";
import { displayNotificationDrawer, hideNotificationDrawer } from "../actions/uiActionCreators";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
      listNotifications: [
        // Add listNotifications to the state
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ],
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  };

  // New method to remove a notification by id
  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  };

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.state.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { user, logOut, listNotifications } = this.state;

    const { isLoggedIn, displayDrawer } = this.props;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className={css(styles.app)} data-testid="App">
          <div className={css(styles.appContainer)}>
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.props.displayNotificationDrawer}
              handleHideDrawer={this.props.hideNotificationDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header />
          </div>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Here is some news from the school. Stay tuned for updates!</p>
          </BodySection>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  appContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderBottom: "3px solid rgb(194, 79, 79)",
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#ffffff",
  },
});

// export default App;

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
