import React, { Component } from "react";
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

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      }
    });
  };

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  };

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.state.logOut();
    }
  };

  render() {
    const { displayDrawer, user, logOut } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className={css(styles.app)} data-testid="App">
          <div className={css(styles.appContainer)}>
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
            <Header />
          </div>
          {user.isLoggedIn ? ( // Use state to check login
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} /> {/* Pass the logIn function */}
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

export default App;
