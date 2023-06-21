import React, { useState } from "react";
import "./App.css";
import Pad from "./components/Pad";
import Display from "./components/Display";

function App() {
  const [value, setValue] = useState<string>("0");

  return (
    <div className="App">
      <div className="Calculatator">
        <Display value={value}></Display>
        <Pad></Pad>
      </div>
    </div>
  );
}

export default App;
