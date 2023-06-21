import React from "react";
import "./App.css";
import Pad from "./components/Pad";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <div className="Calculatator">
        <Display></Display>
        <Pad></Pad>
      </div>
    </div>
  );
}

export default App;
