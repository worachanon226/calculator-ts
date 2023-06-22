import React, { useState } from "react";
import "./App.css";
import Pad from "./components/Pad";
import Display from "./components/Display";

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

  const onDigitButtonClick = (digit: number) => {
    let newValue = value;

    if ((value === "0" && digit === 0) || value.length > 12) {
      return;
    }

    if (waitingOp) {
      newValue = "";
      setWaitingOp(false);
    }

    if (value !== "0") {
      newValue = newValue + digit.toString();
    } else {
      newValue = digit.toString();
    }

    setValue(newValue);
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

  const onPointButtonClick = () => {
    let newValue = value;

    if (waitingOp) {
      newValue = "0";
    }

    if (newValue.indexOf(".") === -1) {
      newValue = newValue + ".";
    }

    setValue(newValue);
    setWaitingOp(false);
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
