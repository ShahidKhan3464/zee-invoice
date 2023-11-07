"use client";

import styled from "styled-components";

export const StyledCustomButton = styled.button`
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-style: normal;
  font-family: Inter;
  line-height: normal;
  padding: ${(props) => props.pd};
  width: ${(props) => (props.width ? props.width : '')};
  font-size: ${(props) => (props.fs ? props.fs : "22px")};
  color: ${(props) => (props.color ? props.color : 'black')};
  border: ${(props) => (props.border ? props.border : 'none')};
  background-color: ${(props) => (props.bg ? props.bg : 'red')};
  border-radius: ${(props) => (props.radius ? props.radius : '4px')};        

  /* @media screen and (max-width : 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
  
  @media screen and (max-width : 480px) {
    font-size: 14px;
    padding: 5px 10px;
  } */
`