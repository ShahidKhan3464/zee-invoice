"use client";

import styled from "styled-components";

export const StyledNavbar = styled.div`
    width: 100%;
    z-index: 1;
    position: fixed;
    padding: 20px 0;
    background: ${(props) => (props.isnavbarbgcolor ? "white" : "none")};

    .navbar_content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &_btns {
            gap: 15px;
            display: flex;
            align-items: center;

            &_invoice {
                @media screen and (max-width: 520px) {
                    display: none;
                }
            }

            &_login {
                @media screen and (max-width : 520px) {
                    button {
                        font-size: 16px;
                        padding: 9px 15px;
                    }
                } 
            }
        }
    }
`