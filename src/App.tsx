import React, { useState } from "react";
import "./App.css";
import Pad from "./components/Pad";
import Display from "./components/Display";
import { setMaxIdleHTTPParsers } from "http";

function App() {
  const [value, setValue] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const [waitingOp, setWaitingOp] = useState<boolean>(true);
  const [nowOp, setNowOp] = useState<string>();

  const calculate = (num: number, op: string): boolean => {
    let newResult = result;
    if (op === "+") {
      newResult += num;
    } else if (op === "-") {
      newResult -= num;
    } else if (op === "*") {
      newResult *= num;
    } else {
      newResult /= num;
    }

    setResult(newResult);
    setValue(newResult.toString().slice(0, 12));
    return true;
  };

  const onEqualButtonClick = () => {
    const num = Number(value);

    if (typeof nowOp !== "undefined" && !waitingOp) {
      if (calculate(num, nowOp)) return;
      setNowOp(undefined);
    } else {
      setValue(num.toString());
    }
  };

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
