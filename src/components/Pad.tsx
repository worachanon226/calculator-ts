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
}

export const Pad: FunctionComponent<Padprops> = ({
  onDigitButtonClick,
  onOperatorButtonClick,
  onEqualButtonClick,
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    console.log(keyCode);
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick(keyCode - 48);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick("+");
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick("-");
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick("×");
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick("÷");
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <StyledPad>
      <Numpad color={"grey"} isLarge={false}>
        C
      </Numpad>
      <Numpad color={"grey"} isLarge={false}>
        +/-
      </Numpad>
      <Numpad color={"grey"} isLarge={false}>
        %
      </Numpad>
      <Numpad color={"orange"} isLarge={true}>
        ÷
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        7
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        8
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        9
      </Numpad>
      <Numpad color={"orange"} isLarge={true}>
        ×
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        4
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        5
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        6
      </Numpad>
      <Numpad color={"orange"} isLarge={true}>
        -
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        1
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        2
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        3
      </Numpad>
      <Numpad color={"orange"} isLarge={true}>
        +
      </Numpad>
      <Numpad color={"dark"} isLarge={false} isExpand={true}>
        0
      </Numpad>
      <Numpad color={"dark"} isLarge={false}>
        .
      </Numpad>
      <Numpad color={"orange"} isLarge={true}>
        =
      </Numpad>
    </StyledPad>
  );
};

export default Pad;
