import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import "./Display.css";

interface DisplayProps {
  children?: any;
  value?: string;
}

export const DisplayStyle = styled.div<DisplayProps>`
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
  font-family: inherit;
  font-size: 90px;

  text-align: right;
  margin-bottom: 20px;
`;

const Display: FunctionComponent<DisplayProps> = ({ value }) => {
  return (
    <DisplayStyle>
      <p className="display">{value}</p>
    </DisplayStyle>
  );
};
export default Display;
