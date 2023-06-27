import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import Numpad from "./Numpad";

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 110px);
  grid-auto-rows: 110px;
`;

interface Padprops {
  onDigitButtonClick: (digit: number) => void;
  onOperatorButtonClick: (opr: string) => void;
  onEqualButtonClick: () => void;
  onAllClearButtonClick: () => void;
  onChangeSignButtonClick: () => void;
  onPointButtonClick: () => void;
  onPercentButtonClick: () => void;
}

export const Pad: FunctionComponent<Padprops> = ({
  onDigitButtonClick,
  onOperatorButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onChangeSignButtonClick,
  onPointButtonClick,
  onPercentButtonClick,
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick(keyCode - 48);
    } else if (keyCode === 187 && shiftKey) {
      onOperatorButtonClick("+");
    } else if (keyCode === 189) {
      onOperatorButtonClick("-");
    } else if (keyCode === 56 && shiftKey) {
      onOperatorButtonClick("*");
    } else if (keyCode === 191) {
      onOperatorButtonClick("/");
    } else if ((keyCode === 187 && !shiftKey) || keyCode === 13) {
      onEqualButtonClick();
    } else if (keyCode === 27) {
      onAllClearButtonClick();
    } else if (keyCode === 78) {
      onChangeSignButtonClick();
    } else if (keyCode === 190) {
      onPointButtonClick();
    } else if (keyCode === 53 && shiftKey) {
      onPercentButtonClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <StyledPad>
      <Numpad color={"grey"} isLarge={false} onClick={onAllClearButtonClick}>
        C
      </Numpad>
      <Numpad color={"grey"} isLarge={false} onClick={onChangeSignButtonClick}>
        +/-
      </Numpad>
      <Numpad color={"grey"} isLarge={false} onClick={onPercentButtonClick}>
        %
      </Numpad>
      <Numpad
        color={"orange"}
        isLarge={true}
        onClick={() => onOperatorButtonClick("/")}
      >
        ÷
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(7)}
      >
        7
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(8)}
      >
        8
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(9)}
      >
        9
      </Numpad>
      <Numpad
        color={"orange"}
        isLarge={true}
        onClick={() => onOperatorButtonClick("*")}
      >
        ×
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(4)}
      >
        4
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(5)}
      >
        5
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(6)}
      >
        6
      </Numpad>
      <Numpad
        color={"orange"}
        isLarge={true}
        onClick={() => onOperatorButtonClick("-")}
      >
        -
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(1)}
      >
        1
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(2)}
      >
        2
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        onClick={() => onDigitButtonClick(3)}
      >
        3
      </Numpad>
      <Numpad
        color={"orange"}
        isLarge={true}
        onClick={() => onOperatorButtonClick("+")}
      >
        +
      </Numpad>
      <Numpad
        color={"dark"}
        isLarge={false}
        isExpand={true}
        onClick={() => onDigitButtonClick(0)}
      >
        0
      </Numpad>
      <Numpad color={"dark"} isLarge={false} onClick={onPointButtonClick}>
        .
      </Numpad>
      <Numpad color={"orange"} isLarge={true} onClick={onEqualButtonClick}>
        =
      </Numpad>
    </StyledPad>
  );
};

export default Pad;
