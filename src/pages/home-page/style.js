"use client";

import styled from "styled-components";
import { Images } from "@/common/assets";
import Colors from "@/common/constants/color.constant";

export const StyledHeroSection = styled.div`
    .hero {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url(${Images.heroSectionBg.default.src});
        
        &_content {
            height: 100vh;
            display: flex;
            padding-top: 30px;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            &_heading {
                max-width: 837px;

                p {
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 28px;
                    font-family: Inter;
                    text-align: center;
                    font-style: normal;
                    color: ${Colors.grey600};

                    @media screen and (max-width: 991px) {
                        font-size: 20px;
                        line-height: 25px;
                    }

                    @media screen and (max-width: 480px) {
                        font-size: 16px;
                    }
                }

                h1 {
                    font-size: 52px;
                    font-weight: 800;
                    padding-top: 20px;
                    line-height: 64px;
                    text-align: center;
                    font-style: normal;
                    font-family: Inter;
                    color: ${Colors.grey900};

                    @media screen and (max-width: 991px) {
                        font-size: 50px;
                        line-height: 55px;
                    }

                    @media screen and (max-width: 480px) {
                        font-size: 32px;
                        line-height: 42px;
                    }
                }
            }

            &_btn {
                margin-top: 40px;
                @media screen and (max-width: 768px) {
                    margin-top: 20px;
                }
            }
        }
    }
`

export const StyledInvoiceMockUp = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: -10vh auto 0;

    img {
        position: inherit !important;
    }
`

export const StyledAmazingFeatureSection = styled.div`
    padding-top: 100px;

    @media screen and (max-width: 768px) {
        padding-top: 55px;
    }

    .amazingfeature {
        &_heading {
            text-align: center;
            margin-bottom: 40px;

            @media screen and (max-width: 768px) {
                margin-bottom: 30px;
            }

            h1 {
                font-size: 48px;
                font-weight: 700;
                line-height: 90px;
                font-style: normal;
                font-family: Inter;
                color: ${Colors.secondary};

                @media screen and (max-width: 768px) {
                    font-size: 28px;
                    line-height: 32px;
                }
            }
        }

        &_cards {
            gap: 50px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            &_card {
                width: 100%;
                padding: 30px;
                max-width: 350px;
                text-align: center;
                border-radius: 10px;
                background: #FFFFFF;
                box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.08);

                &_icon {
                    margin-bottom: 35px;
                }

                &_detail {
                    gap: 16px;
                    display: flex;
                    flex-direction: column;

                    h1 {
                        font-size: 22px;
                        font-weight: 700;
                        line-height: 30px;
                        font-style: normal;
                        font-family: Inter;
                        color: ${Colors.secondary};
                    }

                    p {
                        color: #6b7280;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 24px;
                        font-style: normal;
                        font-family: Inter;
                    }
                }
            }
        }
    }
`

export const StyledSoftwareInvoice = styled.div`
    padding-top: 100px;

    @media screen and (max-width: 768px) {
        padding-top: 55px;
    }

    .softwareInvoice_main {
        height: 100%;
        min-height: 672px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${Images.softwareInvoiceBg.default.src});

        @media screen and (max-width: 768px) {
            background-image: unset;
        }

        &_content {
            gap: 100px;
            display: grid;
            padding-top: 80px;
            grid-template-columns: 1fr 1fr;

            @media screen and (max-width: 768px) {
                padding-top: 56px;
                grid-template-columns: 1fr;

                img {
                    grid-row: 2/3;
                }
                &_detail {
                    grid-row: 1/2;
                }
            }

            &_img {
                @media screen and (max-width: 768px) {
                    padding: 0 30px;
                }
            }

            &_detail {
                @media screen and (max-width: 768px) {
                    padding: 0 40px;
                    text-align: center;
                }
                h1 {
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 62px;
                    font-style: normal;
                    font-family: Inter;
                    margin-bottom: 32px;
                    letter-spacing: 0.48px;
                    color: ${Colors.secondary};
                    @media screen and (max-width: 768px) {
                        font-size: 28px;
                        line-height: 36px;
                    }
                }
                p {
                    color: #6B7280;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    font-style: normal;
                    font-family: Inter;
                    margin-bottom: 24px;
                    @media screen and (max-width: 768px) {
                        margin-top: 24px;
                    }
                }

                &_btn {
                    @media screen and (max-width: 768px) {
                        display: none;
                    }
                }
            }
        }
    }
`

export const StyledSmartInvoice = styled.div`
    padding-top: 100px;

    @media screen and (max-width: 768px) {
        padding-top: 55px;
    }

    .smartInvoice_content {
        &_heading {
            text-align: center;
            margin-bottom: 45px;

            @media screen and (max-width: 768px) {
                margin-bottom: 35px;
            }

            h1 {
                font-size: 48px;
                font-weight: 700;
                line-height: 62px;
                font-style: normal;
                font-family: Inter;
                letter-spacing: 0.48px;
                color: ${Colors.secondary};
                @media screen and (max-width: 768px) {
                    font-size: 28px;
                    line-height: 36px;
                }
            }
        }

        &_cards {
            display: grid;
            gap: 32px 80px;
            align-items: center;
            margin-bottom: 40px;
            grid-template-columns: 1fr 1fr;

            @media screen and (max-width: 768px) {
                grid-template-columns: 1fr;
            }

            &_card {
                gap: 21px;
                height: 100%;
                display: flex;
                padding: 32px 20px;
                background: #FFFFFF;
                border-radius: 10px;
                box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.08);

                &_detail {
                    h1 {
                        font-size: 22px;
                        font-weight: 600;
                        line-height: 30px;
                        font-style: normal;
                        font-family: Inter;
                        margin-bottom: 12px;
                        color: ${Colors.secondary};
                    }
                    p {
                        color: #6b7280;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 24px;
                        font-style: normal;
                        font-family: Inter;
                    }
                }
            }
        }
    }
`

export const StyledSaveTime = styled.div`
    padding-top: 100px;

    @media screen and (max-width: 768px) {
        padding-top: 55px;
    }

    .saveTime_main {
        height: 100%;
        min-height: 572px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${Images.saveTimeBg.default.src});

        @media screen and (max-width: 768px) {
            background-image: unset;
        }

        &_content {
            gap: 70px;
            display: grid;
            padding-top: 70px;
            grid-template-columns: 1fr 1fr;

            @media screen and (max-width: 768px) {
                grid-template-columns: 1fr;
            }

            &_detail {
                @media screen and (max-width: 768px) {
                    text-align: center;
                }

                h1 {
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 62px;
                    font-style: normal;
                    font-family: Inter;
                    margin-bottom: 30px;
                    letter-spacing: 0.48px;
                    color: ${Colors.secondary};
                    @media screen and (max-width: 768px) {
                        font-size: 28px;
                        line-height: 36px;
                    }
                }
                p {
                    color: #6b7280;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    font-style: normal;
                    font-family: Inter;
                    margin-bottom: 24px;
                    @media screen and (max-width: 768px) {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            }
        }
    }
`


export const StyledGetInTouch = styled.div`
    padding-top: 100px;

    @media screen and (max-width: 768px) {
        padding-top: 55px;
    }

    .getInTouch_content {
        gap: 80px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        &_img {
            width: 100%;
            max-width: 580px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &_form {
            padding: 30px 0 12px;

            &_title {
                gap: 20px;
                display: flex;
                flex-direction: column;

                h2 {
                    color: #101828;
                    font-size: 48px;
                    font-weight: 600;
                    line-height: 44px;
                    font-family: Inter;
                    font-style: normal;
                    letter-spacing: -0.96px;
                }

                p {
                    color: #475467;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 30px;
                    font-family: Inter;
                    font-style: normal;
                }
            }

            form {
                width: 100%;
                max-width: 480px;
                padding-top: 48px;

                .field-control {
                    padding-bottom: 24px;
                    
                    label {
                        font-size: 14px;
                        font-weight: 500;
                    }

                    input, textarea {
                        padding: 10px 14px;
                    }
                }

                .privacy-policy {
                    padding-bottom: 24px;

                    .checkbox {
                        color: #D0D5DD;

                        &:hover {
                            background: transparent;
                        }
                    }

                    .Mui-checked {
                        color: ${Colors.primary};
                    }

                    .MuiFormControlLabel-label {
                        color: #475467;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 24px;
                        font-family: Inter;
                        font-style: normal;

                        .policy {
                            color: #475467;
                            text-decoration: underline;
                        }
                    }
                }

                .btn-container {
                    button {
                        font-size: 22px;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
`

export const StyledFooter = styled.div`
    margin-top: 100px;
    background: #222039;

    @media screen and (max-width: 768px) {
        margin-top: 55px;
    }

    .footer_content {
        padding-top: 88px;

        @media screen and (max-width: 768px) {
            padding-top: 72px;
        }

        &_detail {
            text-align: center;
            margin-bottom: 64px;

            img {
                margin-bottom: 32px;
                position: inherit !important;
            }

            p {
                color: #D9D9D9;
                margin: 0 auto;
                font-size: 16px;
                font-weight: 400;
                max-width: 668px;
                line-height: 24px;
                font-style: normal;
                font-family: Inter;
            }
        }

        &_bottom {
            gap: 30px;
            display: flex;
            flex-wrap: wrap;
            padding-top: 30px;
            align-items: center;
            padding-bottom: 50px;
            border-top: 1px solid #9c9da0;
            justify-content: space-between;

            @media screen and (max-width: 768px) {
                border: none;
                padding-top: 0;
            }

            p {
                gap: 16px;
                display: flex;
                margin: 0 auto;
                color: #ffffff;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                font-style: normal;
                font-family: Inter;
                align-items: center;
            }

            h6 {
                opacity: 0.85;
                margin: 0 auto;
                color: #D9D9D9;
                font-size: 14px;
                font-weight: 500;
                font-style: normal;
                font-family: Inter;
            }

            &_socialIcons {
                gap: 25px;
                display: flex;
                margin: 0 auto;
                align-items: center;
            }
        }
    }
`