"use client";

import React from "react";
import { StyledPhoneField } from "./style";
import { Field, ErrorMessage } from "formik";
import PhoneInput from 'react-phone-input-2';
import ErrorMsg from "@/common/components/error-message";

const PhoneField = (props) => {
    const { label, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props

    return (
        <StyledPhoneField>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name}>
                {({ field, form, meta }) => {
                    return (
                        <PhoneInput
                            {...rest}
                            type="text"
                            country="pk"
                            value={field.value}
                            inputProps={{
                                name: name,
                                autoFocus: true
                            }}
                            disabled={disabled}
                            className={className}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            onChange={phone => form.setFieldValue(name, phone)}
                        />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </StyledPhoneField>
    )
}

export default PhoneField