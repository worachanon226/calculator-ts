import styled, { css } from "styled-components";
import "./Display.css";

interface DisplayProps {
  children?: any;
}

export const DisplayStyle = styled.div<DisplayProps>`
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
  font-family: inherit;
  font-weight: bold;
  font-size: 90px;

  text-align: right;
  margin-bottom: 20px;
`;

const Display = () => {
  return (
    <DisplayStyle>
      <p className="display">1000</p>
    </DisplayStyle>
  );
};
export default Display;
