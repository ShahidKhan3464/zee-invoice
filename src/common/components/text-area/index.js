"use client";

import React from "react";
import { Input } from "antd";
import { Field, ErrorMessage } from "formik";
import { StyledTextAreaField } from "./style";
import ErrorMsg from "@/common/components/error-message";
const { TextArea } = Input

const TextAreaInput = (props) => {
    const { label, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props

    return (
        <StyledTextAreaField>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name}>
                {({ field }) => (
                    <TextArea
                        rows={4}
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
        </StyledTextAreaField>
    )
}

export default TextAreaInput