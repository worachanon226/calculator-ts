import styled, { css } from "styled-components";

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
  font-size: 70px;

  margin: auto;
  text-align: right;
`;

const Display = () => {
  return (
    <DisplayStyle>
      <p>1000</p>
    </DisplayStyle>
  );
};
export default Display;
