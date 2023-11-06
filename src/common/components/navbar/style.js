"use client";

import styled from "styled-components";

export const StyledNavbar = styled.div`
    width: 100%;
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
        }
    }
`