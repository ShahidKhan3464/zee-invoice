"use client";

import React from 'react';
import { StyledCustomButton } from './style';

const CustomButton = ({ pd, fs, bg, width, color, radius, border, title, clicked = () => null, type = 'button' }) => {

  return (
    <StyledCustomButton
      pd={pd}
      fs={fs}
      bg={bg}
      type={type}
      width={width}
      color={color}
      radius={radius}
      border={border}
      onClick={() => clicked()}
    >
      {title}
    </StyledCustomButton>
  )
}

export default CustomButton