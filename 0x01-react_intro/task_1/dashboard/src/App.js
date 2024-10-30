import logo from './holberton-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="holberton-logo" />
        <h1 className='App-title'>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className='App-footer '>
        Copyright 2020 - holberton School
      </footer>
    </div>
  );
}

export default App;
