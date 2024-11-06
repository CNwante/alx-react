import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App" data-testid="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
