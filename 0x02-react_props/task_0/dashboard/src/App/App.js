import logo from '../assets/holberton-logo.png';
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="holberton-logo" />
        <h1 className='App-title'>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" ></input>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ></input>

        <button type="button">OK</button>
      </main>
      <footer className='App-footer '>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </footer>
    </div>
  );
}

export default App;
