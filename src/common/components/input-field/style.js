"use client";

import styled from "styled-components";

export const StyledInputField = styled.div`
  width: 100%;
  position: relative;

  label {
    display: block;
    color: #292929;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 148%;
    font-family: Inter;
    font-style: normal;
    margin-bottom: 4px;
  }

  .ant-input {
    padding: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    border-radius: 9px;
    font-style: normal;
    font-family: Inter;
    background: #FFFFFF;
    border: 1px solid #E4E4E7;

    &::placeholder {
      color: #9CA3AF;
    }
  }
`