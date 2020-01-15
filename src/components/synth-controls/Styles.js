import styled from "styled-components";

export const ControlsWrapper = styled.div`
  display: flex;
  margin-left: 1px;
`;

export const ControlsBlock = styled.div`
  background-color: #000;
  position: relative;
  z-index: 2;
  display: flex;
  border: 1px solid #a46912;
  padding: 8px;
  margin: 8px 8px 8px 0;

  &:first-of-type {
    margin-left: 0;
  }
`;
export const ControlsBlockLabel = styled.div`
  position: absolute;
  top: -8px;
  letter-spacing: 1px;
  font-size: 12px;
  text-transform: uppercase;
  left: 8px;
  color: #a46912;
  background-color: #000;
  padding: 0 2px;
`;
export const ControlsBlockInputWrapper = styled.div`
  margin-right: 8px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const SynthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 10px;
  text-transform: uppercase;
`;
