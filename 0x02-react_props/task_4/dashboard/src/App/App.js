import React from "react";
import PropTypes from 'prop-types';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import "./App.css";

const App = ({ isLoggedIn = false }) => {
  return (
    <React.Fragment>
      <div className="App" data-testid="App">
        <div className="appContainer">
          <Notifications />
          <Header />
        </div>
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
};

// PropTypes for validation
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
