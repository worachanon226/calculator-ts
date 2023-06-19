import React from "react";
import styled, { css } from "styled-components";

const colorStyle = (color) => {
  if (color === "grey") {
    return css`
      background-color: #c4c4c4;
      color: #000000;
      &:hover,
      &:focus {
        background-color: #dfdfdf;
      }
    `;
  } else if (color === "orange") {
    return css`
      background-color: #ff9e52;
      color: #ffffff;
      &:hover,
      &:focus {
        background-color: #ffffff;
        color: #ff9e52;
      }
    `;
  } else if (color === "dark") {
    return css`
      background-color: #4a4a4a;
      color: #ffffff;
      &:hover,
      &:focus {
        background-color: #a2a2a2;
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

const textStyle = (isLarge) => {
  if (isLarge) {
    return css`
      font-size: 50px;
    `;
  } else {
    return css`
      font-size: 35px;
    `;
  }
};

export const ButtonStyle = styled.button`
  font-family: inherit;
  margin: 10px 10px 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  height: 100px;
  width: 100px;
  font-weight: bold;

  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  ${({ color }) => colorStyle(color)}
  ${({ isLarge }) => textStyle(isLarge)}
  ${({ isExpand }) =>
    isExpand &&
    css`
      grid-column-end: span 2;
      width: 220px;
      height: 100px;
      border-radius: 50px;
      text-align: left;
      padding-left: 36px;
    `}
`;

const Numpad = ({ children, color, isLarge, isExpand, onClick }) => {
  return (
    <ButtonStyle
      color={color}
      isLarge={isLarge}
      isExpand={isExpand}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};

export default Numpad;
