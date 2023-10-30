"use client";

import React from "react";
import InputField from "@/common/components/input-field";
import PhoneField from "@/common/components/phone-field";
import CountrySelect from "@/common/components/country-select";

const FormControl = (props) => {
    const { control, ...rest } = props

    switch (control) {
        case "input":
            return <InputField {...rest} />
        case "phoneField":
            return <PhoneField {...rest} />
        case "countrySelect":
            return <CountrySelect {...rest} />
        default:
            return null
    }
}

export default FormControl