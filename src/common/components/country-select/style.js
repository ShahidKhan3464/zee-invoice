"use client";

import styled from "styled-components";

export const StyledCountrySelect = styled.div`
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

    >div {
        padding-bottom: 0;

        button {
            color: #9CA3AF;
            padding: 3px 0;
            border-radius: 5px;
            font-family: Inter;
            padding-right: 8px;
            border: 1px solid #e4e4e7;
            font-size: 12px !important;
        }
    }
`