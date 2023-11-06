"use client";

import styled from "styled-components";
import { Icons } from "@/common/assets";
import Colors from "@/common/constants/color.constant";

export const StyledCreateInvoice = styled.div`
  min-height: 100vh;
  background: #F3F5F7;
  padding-bottom: 80px;
`

export const StyledInvoiceBuilderHeader = styled.div`
  display: grid;
  padding-top: 36px;
  align-items: center;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }

  .invoiceBuilderTitle {
    &_web {
      &_invoiceNo {
        gap: 10px;
        display: flex;
        align-items: center;

        p, span {
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          font-family: Inter;
          font-style: normal;
          color: ${Colors.secondary};  
        }
      }
    }

    &_mobile {
      @media screen and (min-width: 900px) {
        display: none;
      }
    }
  }

  .invoiceBuilderHeaderBtns {
    gap: 16px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr;
  }
`

export const StyledInvoiceBuilderForm = styled.div`
  gap: 20px;
  display: grid;
  margin-top: 30px;
  grid-template-columns: 3fr 1fr;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .invoice_builder_page {
    padding: 28px;
    min-height: 80vh;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 46px 0px rgba(28, 28, 28, 0.10);
    border-top: 4px solid ${(props) => props.invoicebuildercolor ? props.invoicebuildercolor : Colors.secondary};

    &_header {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 900px) {
        flex-direction: column;
      }

      p:nth-child(1) {
        width: 32%;
      }

      p:nth-child(2) {
        width: 15%;
        text-align: center;
      }

      p:nth-child(3) {
        width: 15%;
        text-align: center;
      }

      p:nth-child(4) {
        width: 15%;
        text-align: center;
      }

      p:nth-child(5) {
        width: 15%;
        text-align: right;
      }

      &_upload {
        &_image {
          position: relative;

          .image_hover_effect {
            display: none;
          }

          &:hover .image_hover_effect {
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            cursor: pointer;
            position: absolute;
            align-items: center;
            justify-content: center;
            background-color: rgb(120, 120, 120, 0.7);
          }
        }

        &_btn {
          height: 56px;
          border-radius: 4px;
          background: #F9F9F9;
          border: 1px dashed #E0E0E0;

          @media screen and (max-width: 900px) {
            width: 100%;
            max-width: 100%;
          }

          input {
            opacity: 0;
            height: 100%;
            max-width: 200px;
            transform: translateY(-50px);
          }

          &_content {
            display: grid;
            padding: 11px;
            grid-template-columns: 1fr 3fr;

            &_file {
              p {
                color: #9CA3AF;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                font-family: Inter;
                font-style: normal;
                margin-bottom: 3px;
                width: 100% !important;
                letter-spacing: -0.24px;
              }

              h1 {
                color: #374151;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                font-family: Inter;
                font-style: normal;
                width: max-content;
                letter-spacing: -0.24px;
                border-bottom: 1px solid #374151;
              }
            }
          }
        }
      }

      &_select_invoice {
        width: 200px;

        @media screen and (max-width: 900px) {
          width: 100%;
          max-width: 100%;
          margin-top: 15px;
        }

        p {
          color: #292929;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          font-style: normal;
          margin-bottom: 5px;
          font-family: Inter;
          width: 100% !important;
        }

        select {
          width: 100%;
          outline: none;
          color: #ABA7AF;
          font-size: 14px;
          padding: 4px 8px;
          font-weight: 400;
          background: none;
          line-height: 16px;
          border-radius: 5px;
          font-style: normal;
          font-family: Inter;
          border: 1px solid #E0E0E0;
        }
      }
    }

    &_body {
      gap: 60px;
      display: grid;
      margin-top: 30px;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 900px) {
        gap: 15px;
        margin-top: 15px;
        grid-template-columns: 1fr;
      }

      &_from, &_to {
        p {
          color: #9ca3af;
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          font-style: normal;
          font-family: Inter;
          margin-bottom: 10px;
        }

        &_senderDetail, &_receiverDetail {
          min-height: 192px;
          padding: 12px 16px;
          border-radius: 5px;
          background: #FFFFFF;
          height: calc(100% - 30px);
          border: 1px solid #D0D5DD;

          h1 {
            color: #6B7280;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
          }

          &_btn {
            height: 100%;
            display: flex;
            cursor: pointer;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            p {
              color: #374151;
              font-size: 12px;
              font-weight: 400;
              margin-top: 14px;
              line-height: 16px;
              font-style: normal;
              font-family: Inter;
            }
          }
        }

        &_detail {
          padding: 16px;
          min-height: 192px;
          border-radius: 5px;
          background: #FFFFFF;
          border: 1px solid #d0d5dd;

          &_title {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            justify-content: space-between;

            > h1 {
              color: #6b7280;
              font-size: 12px;
              font-weight: 400;
              line-height: 14px;
              font-style: normal;
              font-family: Inter;
            }

            img {
              cursor: pointer;
            }
          }

          >h1 {
            font-size: 14px;
            font-weight: 700;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            margin-bottom: 16px;
            color: ${Colors.secondary};
          }

          p {
            color: #4f4f4f;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            margin-bottom: 12px;
          }
        }
      }
    }

    &_controls {
      gap: 60px;
      display: grid;
      margin: 20px 0;
      grid-template-columns: 1fr 1fr;

      &_date {
        label {
          color: #202020;
          font-size: 10px;
          font-weight: 600;
          line-height: 12px;
          margin-right: 8px;
          font-style: normal;
          font-family: Inter;
        }
      }
    }

    &_table {

      .textarea {
        width: 86.5%;
      }

      &_header {
        display: flex;
        padding: 8px 14px;
        border-radius: 2px;
        align-items: center;
        justify-content: space-between;
        background-color: ${(props) => props.invoicebuildercolor ? props.invoicebuildercolor : Colors.secondary};

        p {
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 600;
          line-height: 14px;
          font-family: Inter;
          font-style: normal;
        }
      }

      &_form {
        &_fields {
          gap: 16px;
          display: flex;

          >div:nth-child(1) {
            width: 35%;
          }

          >div:nth-child(2) {
            width: 15%;
          }

          >div:nth-child(3) {
            width: 15%;
          }

          >div:nth-child(4) {
            width: 15%;
          }

          .ant-form-item {
            margin-bottom: 10px;

            .ant-input-number {
              width: 100%;
            }

            .ant-form-item-explain-error {
              font-size: 11px;
              font-weight: 400;
              line-height: 16px;
              font-family: Inter;
              font-style: normal;
              padding-bottom: 5px;
            }

            input {
              color: #202020;
              font-size: 12px;
              font-weight: 300;
              padding: 8px 10px;
              line-height: 16px;
              font-family: Inter;
              font-style: normal;

              &::placeholder {
                color: #E0E0E0;
              }
            }
          }

          p {
            width: 10%;
            height: 34px;
            display: flex;
            justify-content: center;
          }
        }
      }

      &_editable {
        &_inputs {
          gap: 10px;
          display: flex;
          margin: 10px 0;

          p {
            width: 15%;
            display: flex;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            font-family: Inter;
            font-style: normal;
            align-items: center;
            justify-content: center;
            color: ${Colors.secondary};
          }

          .ant-input {
            width: 35%;
          }

          .ant-input-number {
            width: 15%;
          }
        }

        &_textarea {
          width: 84%;
        }
      }

      &_row {
        padding-bottom: 10px;
        border-bottom: 1px solid #e0e0e0;

        .showCrossOnHover {
          position: relative;

          .tableRowDescription {
            font-size: 12px;
            padding: 0 14px;
            font-weight: 400;
            line-height: 16px;
            font-style: normal;
            font-family: Inter;
            word-break: break-all;
            color: ${Colors.secondary};
          }

          .tableActions {
            display: none;
          }

          &:hover .tableActions {
            top: 60%;
            right: 15px;
            display: flex;
            cursor: pointer;
            position: absolute;
          }
        }

        &_body {
          display: flex;
          padding: 8px 14px;
          position: relative;
          align-items: center;
          justify-content: space-between;

          p {
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            font-style: normal;
            font-family: Inter;
            color: ${Colors.secondary};
          }
        }
      }
    }
    
    &_summary {
      width: 100%;
      max-width: 240px;
      margin-top: 50px;
      margin-left: auto;
      border-radius: 3px;
      border: 1px solid #e0e0e0;

      &_header {
        padding: 8px 0;
        text-align: center;
        border-radius: 2px 2px 0px 0px;
        background: ${(props) => props.invoicebuildercolor ? props.invoicebuildercolor : Colors.secondary};

        p {
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 700;
          line-height: 14px;
          font-family: Inter;
          font-style: normal;
        }
      }

      &_body {
        padding: 12px;

        &_subtotal,  &_tax, &_total {
          p {
            color: #767676;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            letter-spacing: -0.24px;
          }

          h6 {
            color: #202020;
            font-size: 12px;
            font-weight: 300;
            line-height: 14px;
            font-style: normal;
            font-family: Inter;
            letter-spacing: -0.24px;

            span {
              font-weight: 800;
              margin-left: 3px;
            }
          }
        }

        &_subtotal {
          display: flex; 
          padding-top: 10px;
          padding-bottom: 10px;
          justify-content: space-between;
          border-bottom: 1px solid #e0e0e0;
        }

        &_tax {
          display: flex;
          padding-top: 20px;
          padding-bottom: 10px;
          justify-content: space-between;
          border-bottom: 1px solid #e0e0e0;
        }

        &_total {
          display: flex;
          padding-top: 20px;
          padding-bottom: 10px;
          justify-content: space-between;
        }
      }
    }

    &_setting {
      @media screen and (max-width: 900px) {
        display: none;
      }
    }

    &_footer {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #9CA3AF;

      input {
        width: 100%;
        outline: none;
        font-size: 12px;
        font-weight: 300;
        padding: 8px 16px;
        line-height: 16px;
        border-radius: 2px;
        font-family: Inter;
        font-style: normal;
        background: #f9f9f9;
        border: 1px dashed #e0e0e0;
        &::placeholder {
          color: #767676;
        }
      }
    }
  }

  .invoiceSubmitButton {
    outline: none;
    display: flex;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    border-radius: 4px;
    font-family: Inter;
    font-style: normal;
    align-items: center;
    background: #f9f9f9;
    justify-content: center;
    color: ${Colors.secondary};
    border: 1px dashed #e0e0e0;

    &:hover {
      color: ${Colors.secondary} !important;
    }
  }
`

export const StyledInvoiceSetting = styled.div`

  @media screen and (min-width : 900px) {
    top: 0;
    height: 100%;
    position: sticky;
    padding: 20px 16px;
    background-color: #FFFFFF;
  }

  .builder_setting {
    &_title {
      margin-bottom: 24px;

      h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        font-family: Inter;
        font-style: normal;
        color: ${Colors.secondary};
      }
    }

    &_defaultColors {
    
      >div {
        gap: 8px;
        display: grid;
        padding-top: 8px;
        text-align: center;
        grid-template-columns: repeat(8, 1fr);    
      }

      h4 {
        color: #444444;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        font-family: Inter;
        font-style: normal;
        padding-bottom: 8px;
        letter-spacing: -0.28px;
        border-bottom: 1px solid #E0E0E0;
      }
    }

    &_colorPicker {
      margin-top: 12px;

      &_panelHeader {
        gap: 10px;
        display: flex;
        cursor: pointer;
        border-radius: 4px;
        padding: 12px 16px;
        align-items: center;
        background-color: #FFFFFF;
        border: 1px solid #d0d5dd;
        justify-content: space-between;

        .left {
          gap: 10px;
          display: flex;
          align-items: center;
        }

        .right {
          height: 15px;
        }

        p {
          color: #444444;
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          font-style: normal;
          font-family: Inter;
        }
      }
    }

    &_currency {
      margin-top: 24px;

      p {
        color: #444444;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        font-family: Inter;
        font-style: normal;
        padding-bottom: 10px;
        letter-spacing: -0.02em;
        border-bottom: 1px solid #e0e0e0;
      }

      .ant-select {
        outline: none;
        margin-top: 10px;
        width: 100% !important;

        .ant-select-selector {
          outline: none;
          border-radius: 2px;
          background: #FFFFFF;
          border: 1px solid #d0d5dd;
        }
      }
    }

    &_invoiceDetail {
      margin-top: 24px;

      > p {
        color: #444444;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        font-family: Inter;
        font-style: normal;
        padding-bottom: 10px;
        letter-spacing: -0.02em;
        border-bottom: 1px solid #e0e0e0;
      }

      &_switch {
        display: flex;
        padding: 0 20px;
        margin-top: 15px;
        align-items: center;
        justify-content: space-between;

        > p {
          color: #202020;
          font-size: 12px;
          font-weight: 400;
          line-height: 12px;
          font-style: normal;
          font-family: Inter;
        }

        .ant-switch-checked {
          background-color: #34c759;
        }
      }
    }
  }
`

export const StyledColorCheckbox = styled.div`
  input[type="radio"] {
    display: none;
  }

  input[type="radio"] + label {
    width: 32px;
    height: 32px;
    cursor: pointer;
    border-radius: 3px;
    display: inline-block;
    background-color: ${(props) => (props.color ? props.color : "red")};
    border: 1px solid ${(props) => (props.color ? props.color : "red")};
  }

  input[type="radio"]:checked + label:before {
    content: "";
    width: 100%;
    color: white;
    height: 100%;
    display: flex;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${Icons.checked.src});
  }
`