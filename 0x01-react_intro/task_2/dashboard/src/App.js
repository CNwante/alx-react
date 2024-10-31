import logo from './holberton-logo.png';
import './App.css';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="holberton-logo" />
        <h1 className='App-title'>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="emial">Email:</label>
        <input type="text" id="email" name="email" ></input>

        <label htmlFor="password">Password:</label>
        <input type="password" id="email" name="password" ></input>

        <button type="button">OK</button>
      </div>
      <footer className='App-footer '>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </footer>
    </div>
  );
}

export default App;
