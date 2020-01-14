import styled from "styled-components";

const KEY_WIDTH = 60;
const KEY_HEIGHT = 240;

export const KeyboardWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const KeyboardWhites = styled.div`
  position: relative;
  display: inline-block;
`;

export const KeyboardBlacks = styled.div`
  position: absolute;
  display: inline-block;
  left: -${KEY_WIDTH / 2}px;
  top: 0;
`;

export const SkipKey = styled.div`
  width: ${KEY_WIDTH}px;
  height: 60px;
  background: transparent;
  display: inline-block;
  margin: 1px;
`;

export const KeyButton = styled.div`
  display: inline-block;
  width: ${KEY_WIDTH}px;
  
  height: ${({black}) => black ? KEY_HEIGHT / 5 * 3 : KEY_HEIGHT}px;
  border: ${({black}) => black ? "#B83373" : "#A46912"} 1px solid;
  background-color: #000;
  color: #000;
  margin: 1px;
  transition: background-color .2s, border-color .2s;

&.active {
  background-color: ${({black}) => black ? "#B83373" : "#A46912"};
  border-color: #FFF;
}
`;