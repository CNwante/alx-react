import logo from "../assets/holberton-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="holberton-logo" />
      <h1 className="App-title">School dashboard</h1>
    </header>
  );
};

export default Header;
