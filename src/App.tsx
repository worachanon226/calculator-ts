import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Numpad from "./components/Numpad";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Numpad color="red" onClick={undefined}>
          +
        </Numpad>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
