"use client";

import styled from "styled-components";
import TableRow from '@mui/material/TableRow';
import Colors from "@/common/constants/color.constant";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const PrimaryButton = styled.button`
    width: 100%;
    border: none;
    outline: none;
    color: #FFFFFF;
    font-size: 16px;
    padding: 14px 0;
    cursor: pointer;
    font-weight: 600;
    line-height: 28px;
    font-style: normal;
    font-family: Inter;
    border-radius: 6px;
    letter-spacing: -0.2px;
    background: ${Colors.primary};
`

export const StyledBox = styled.div`
    display: flex;
    padding-top: 90px;
    background: #F3F5F7;
    padding-bottom: 50px;
    justify-content: center;
    min-height: calc(100vh - 105px);

    .content {
        width: 100%;
        height: 100%;
        max-width: 520px;
        border-radius: 8px;
        background: #FFFFFF;
        padding: 40px 24px 24px;
        box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.06);

        &_top {
            img {
                width: auto;
                height: auto;
                margin: auto;
                display: block;
                padding-top: 14px;
                padding-bottom: 16px;
            }

            h2 {
                font-size: 24px;
                font-weight: 600;
                line-height: 40px;
                font-family: Inter;
                font-style: normal;
                text-align: center;
                margin-bottom: 8px;
                color: ${Colors.secondary};
            }

            p {
                color: #6B7280;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                text-align: center;
                font-family: Inter;
                font-style: normal;
            }
        }

        &_resend-email {
            gap: 16px;
            display: flex;
            margin-top: 40px;
            align-items: center;
            flex-direction: column;

            p {
                color: #6B7280;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                text-align: center;
                font-family: Inter;
                font-style: normal;
            }
        }

        &_form {
            margin-top: 40px;
            margin-bottom: 24px;

            .field-control {
                margin-bottom: 16px;
            }

            .forgot-password {
                text-align: right;
                margin-bottom: 24px;

                a {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    text-align: center;
                    font-family: Inter;
                    font-style: normal;
                    text-decoration: none;
                    color: ${Colors.primary};
                }
            }

            .terms-condition {
                margin-top: 16px;
                margin-bottom: 16px;
                text-decoration: none;

                .checkbox {
                    color: #94A3B8;

                    &:hover {
                        background: transparent;
                    }
                }

                .Mui-checked {
                    color: ${Colors.primary};
                }

                .MuiFormControlLabel-label {
                    color: #4F4F4F;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    text-align: center;
                    font-family: Inter;
                    font-style: normal;

                    .terms-condition {
                        color: #0286FF;
                    }
                }
            }
        }

        &_bottom {
            .continue-with {
                display: grid;
                margin-bottom: 24px;
                align-items: center;
                grid-template-columns: 1fr auto 1fr;

                div:first-child, div:last-child {
                    height: 1px;
                    background: #9CA3AF;
                }

                .text {
                    margin: 0 25px;
                    color: #6B7280;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 22px;
                    font-style: normal;
                    font-family: Inter;
                }
            }

            .social-media_btn {
                gap: 20px;
                display: flex;
                align-items: center;
                
                button {
                    gap: 4px;
                    width: 100%;
                    display: flex;
                    outline: none;
                    cursor: pointer;
                    padding: 15px 34px;
                    border-radius: 6px;
                    align-items: center;
                    background: transparent;
                    justify-content: center;
                    border: 1px solid #E0E0E0;

                    span {
                        color: #71717A;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 22px;
                        font-style: normal;
                        font-family: Inter;
                    }
                }
            }

            .sign-up, .login {
                gap: 4px;
                display: flex;
                margin-top: 40px;
                align-items: center;
                justify-content: center;

                span {
                    color: #71717A;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 22px;
                    font-style: normal;
                    font-family: Inter;
                }

                a {
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 22px;
                    text-align: center;
                    font-family: Inter;
                    font-style: normal;
                    text-decoration: none;
                    color: ${Colors.primary};
                }
            }

            .login {
                margin-top: 40px;
            }
        }
    }
`

export const StyledTableCell = styled(TableCell)((props) => ({
    [`&.${tableCellClasses.head}`]: {
        color: '#FFFFFF',
        fontSize: '12px',
        fontWeight: '600',
        lineHeight: '14px',
        fontStyle: 'normal',
        padding: '8px 14px',
        fontFamily: 'Inter',
        borderBottom: 'none',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '16px',
        fontStyle: 'normal',
        padding: '8px 14px',
        fontFamily: 'Inter',
        borderBottom: 'none',
        color: Colors.secondary,
    },
}))