"use client";

import styled from "styled-components";
import Colors from '@/common/constants/color.constant';

export const StyledValidUserNavbar = styled.div`
  padding: 16px 0;
  background-color: #FFFFFF;

  .navbar_content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_btns {
      gap: 15px;
      display: flex;
      align-items: center;
    }

    &_links {
      gap: 48px;
      display: flex;
      align-items: center;

      @media screen and (max-width: 678px) {
        gap: 20px;
      }

      &_nav {
        gap: 48px;
        display: flex;
        align-items: center;

        @media screen and (max-width: 678px) {
          display: none;
        }

        &_link {
          gap: 8px;
          display: flex;
          cursor: pointer;
          align-items: center;

          p {
            font-size: 14px;
            font-weight: 500;
            line-height: 17px;
            font-style: normal;
            font-family: Inter;
            color: ${Colors.secondary};
          }
        }
      }
    }

    &_hamberg {
      order: 1;
      @media screen and (min-width: 678px) {
        display: none;
      }
    }
  }
`

export const InvoiceMobileNavstyle = styled.div`
  .invoice_mobile_nav_content {
    padding: 0 32px;
    &_logo {
      text-align: center;
    }
    &_links {
      margin-top: 36px;

      &_link {
        gap: 8px;
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        p {
          margin: 0;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          font-style: normal;
          font-family: Inter;
          color: ${Colors.secondary};
        }
      }
    }
  }
`