"use client";

import React from 'react';
import { Field, ErrorMessage } from "formik";
import { StyledCountrySelect } from "./style";
import ReactFlagsSelect from "react-flags-select";
import ErrorMsg from "@/common/components/error-message";

const CountrySelect = (props) => {
    const { label, prefix, defaultValue, maxLength, disabled, placeholder, className, name, ...rest } = props;

    return (
        <StyledCountrySelect>
            <label htmlFor={name}>{label}</label>
            <Field name={name} id={name}>
                {({ field, form, meta }) => {
                    return (
                        <ReactFlagsSelect
                            {...rest}
                            {...field}
                            searchable
                            className={className}
                            selected={field.value}
                            placeholder={placeholder}
                            onSelect={(code) => form.setFieldValue(name, code)}
                        />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </StyledCountrySelect>
    )
}

export default CountrySelect