import styled, { css } from "styled-components";

type InputProps = {
  error?: boolean;
};

type Props = {
  isOpen: boolean;
  error: boolean;
};

export const Container = styled.div<Props>`
  .html-select {
    display: none;
  }
  .custom-select-wrapper {
    position: relative;
    user-select: none;
    width: 100%;
  }
  .custom-select {
    padding: 25px;
    border-radius: 16px;
    width: 100%;
    border: 1px solid #666;
  
    outline: none;
    padding-right: 8px;
    background: ${(props) => props.theme.white};
    position: relative;
    cursor: pointer;
    color: ${(props) => props.theme.grey3};
  }
  .custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .custom-options {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.white};
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
    padding: 8px;
    max-height: 200px;
    overflow-y: auto;
  }
  .custom-select.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    margin-top: 8px;
    box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001),
      -2px 2px 5px rgba(67, 86, 100, 0.123689);
    border-radius: 8px;
  }
  .custom-option {
    position: relative;
    display: block;
    padding: 5px 8px;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 6px;
    color: ${(props) => props.theme.grey3};
    ${(props) => props.theme.medium_14};
    margin-bottom: 12px;
    height: 32px;
  }

  .option-container {
    border: solid white 0.1px;
  }

  .option-container:hover {
    .custom-option {
      cursor: pointer;
      background-color: ${(props) => props.theme.primary5};
    }
  }

  .custom-option.selected {
    color: ${(props) => props.theme.grey3};
    background-color: ${(props) => props.theme.primary5};
  }

  .arrow {
    position: relative;
    height: 7.72px;
    width: 12.26px;
  }
  .arrow::before,
  .arrow::after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }
  .arrow::before {
    left: -2px;
    transform: rotate(-45deg);
    background-color: ${(props) => props.theme.grey3};
  }
  .arrow::after {
    left: 2px;
    transform: rotate(45deg);
    background-color: ${(props) => props.theme.grey3};
  }
  .open .arrow::before {
    left: -2px;
    transform: rotate(45deg);
  }
  .open .arrow::after {
    left: 2px;
    transform: rotate(-45deg);
  }
`;
