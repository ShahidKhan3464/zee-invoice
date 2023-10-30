import styled from "styled-components";

export const StyledHompage = styled.section`
    overflow: hidden;
    position: relative;

    .content {
        inset: 0;
        z-index: 2;
        position: absolute;

        .heading {
            padding-top: 30px;
        }

        &_center {
            gap: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;

            .coming-soon {
                color: #FFF;
                font-size: 40px;
                font-weight: 600;
                line-height: 96px;
                font-style: normal;
                font-family: Poppins;
            }

            &_invoiceMoto {
                width: 100%;
                max-width: 450px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            &_form {
                width: 100%;
                max-width: 380px;

                .join-now {
                    color: #EEE;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 16px;
                    font-style: normal;
                    font-family: Inter;
                }

                .form-field {
                    gap: 12px;
                    display: flex;
                    padding-top: 12px;
                    align-items: center;

                    input {
                        width: 100%;
                        outline: none;
                        padding: 12px;
                        color: #B4B4B4;
                        border-radius: 6px;
                        background: transparent;
                        border: 1px solid #B4B4B4;

                        &::placeholder {
                            color: #EBEBEB;
                        }
                    }

                    button {
                        color: #FFF;
                        outline: none;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 500;
                        border-radius: 6px;
                        padding: 11px 24px;
                        text-align: center;
                        font-family: Inter;
                        font-style: normal;
                        background: #3F4DE1;
                        line-height: normal;
                        border: 1px solid #3F4DE1;
                    }
                }
            }
        }

        &_social-icons {
            gap: 10px;
            display: flex;
            padding-top: 50px;
            align-items: center;
            justify-content: center;
        }
    }

    .background-video {
        height: 100vh;

        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`