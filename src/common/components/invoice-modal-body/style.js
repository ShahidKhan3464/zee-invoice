"use client";

import styled from "styled-components";

export const StyledInvoiceModalBody = styled.div`
  
    .fieldInputPair {
        gap: 18px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media screen and (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    }

    .basicInformation {
        @media screen and (max-width: 700px) {
            text-align: center;
        }

        h1 {
            color: #444444;
            font-size: 14px;
            font-weight: 300;
            line-height: 20px;
            font-family: Inter;
            font-style: normal;
            margin-bottom: 20px;
        }
    }

    .addressInformation {
        margin-top: 40px;

        @media screen and (max-width: 700px) {
            margin-top: 15px;
            text-align: center;
        }

        h1 {
            color: #444444;
            font-size: 14px;
            font-weight: 300;
            line-height: 20px;
            font-family: Inter;
            font-style: normal;
            margin-bottom: 20px;
        }
    }

    .informationBtn {
        margin-top: 32px;

        @media screen and (max-width: 700px) {
            margin-top: 27px;
        }
    }
`