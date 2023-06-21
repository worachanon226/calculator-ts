import React from "react";
import styled from "styled-components";
import Numpad from "./Numpad";

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 110px);
  grid-auto-rows: 110px;
`;

const Pad = () => {
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
