import React from "react";
import styled from "styled-components";

const colorStyle = (color) => {
  if (color === "red") {
    return css`
      background-color: #c04444;
      color: #fff;
      &:hover,
      &:focus {
        background-color: #af3b3b;
      }
    `;
  } else if (color === "green") {
    return css`
      background-color: #018645;
      color: #fff;
      &:hover,
      &:focus {
        background-color: #016d38;
      }
    `;
  } else if (color === "dark") {
    return css`
      background-color: #272727;
      color: #c5830d;
      &:hover,
      &:focus {
        background-color: #1a1a1a;
      }
    `;
  } else {
    return css`
      background-color: #2e2e2e;
      color: #fff;
      &:hover,
      &:focus {
        background-color: #212121;
      }
    `;
  }
};

export const buttonStyle = styled.button`
  ${({ color }) => colorToCss(color)}
`;

const Numpad = ({ children, color, onClick }) => {
  return (
    <buttonStyle color={color} onClick={onClick}>
      {children}
    </buttonStyle>
  );
};

export default Numpad;
