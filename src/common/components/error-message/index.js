"use client";

import React from "react";
import { InputErrorMessage } from './style';

const ErrorMessage = (props) => {

    return <InputErrorMessage>{props.children}</InputErrorMessage>
}

export default ErrorMessage