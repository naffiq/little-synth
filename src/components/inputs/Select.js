import styled from "styled-components";
import BaseSelect from "react-dropdown-select";

const Select = styled(BaseSelect)`
  border-color: #b83373 !important;
  color: #a46912;
  width: 100px !important;
  border-radius: 0 !important;

  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: #b83373;
  }
  .react-dropdown-select-option {
    border: 1px solid #b83373;
  }
  .react-dropdown-select-item {
    color: #333;
  }
  .react-dropdown-select-input {
    color: #b83373;
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    text-align: left;
    padding: 0;
    // display: flex;
    flex-direction: column;
    border-radius: 0;
    max-height: 300px;
    overflow: auto;
    z-index: 9;
    background: #333;
    box-shadow: none;
    color: #b83373 !important;
  }
  .react-dropdown-select-item {
    color: #f2f2f2;
    border-bottom: 1px solid #333;

    :hover {
      color: #b83373;
    }
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    //background: #111;
    border-bottom: 1px solid #333;
    color: #b83373;
    font-weight: bold;
  }
  .react-dropdown-select-item.react-dropdown-select-item-disabled {
    background: #777;
    color: #fff;
  }
`;

export default Select;
