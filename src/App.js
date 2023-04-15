import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The End of Diplomado <br/>
          <label>You can (not) make a BookStore</label>
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arende cosas
        </a>
      </header>
    </div>
  );
}

export default App;
