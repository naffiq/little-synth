import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: transparent;
  display: block;
  width: 80px;
  height: 40px;
  line-height: 42px;
  padding: 0 4px;
  border: 1px solid #b83373;
  color: #a46912;
`;

const NumberInput = props => (
  <StyledInput
    type="number"
    {...props}
    onChange={event => {
      if (typeof props.onChange === "function") {
        props.onChange(event.target.value);
      }
    }}
  />
);

export default NumberInput;
