"use client";

import React from "react";
import { Input } from "antd";
import { StyledInputField } from "./style";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "@/common/components/error-message";

const InputField = (props) => {
    const { label, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props

    return (
        <StyledInputField>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name}>
                {({ field }) => (
                    <Input
                        {...rest}
                        {...field}
                        prefix={prefix}
                        disabled={disabled}
                        className={className}
                        maxLength={maxLength}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                    />
                )}
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </StyledInputField>
    )
}

export default InputField