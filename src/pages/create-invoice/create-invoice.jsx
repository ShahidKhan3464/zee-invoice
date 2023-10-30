"use client";

import Image from 'next/image';
import { Container } from "@mui/material";
import { Palette } from "color-thief-react";
import React, { useState, useRef } from "react";
import Footer from "@/common/components/footer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Colors from "@/common/constants/color.constant";
import { useDispatch, useSelector } from 'react-redux';
import InvoiceBuilderForm from "./invoice-builder-form";
import PDFDocument from '@/common/components/pdf-template';
import CustomButton from "@/common/components/custom-button";
import InvoiceNavbar from "@/common/components/valid-user-navbar";
import { StyledCreateInvoice, StyledInvoiceBuilderHeader } from "./style";
import { setPaletteColors } from '@/provider/features/create-invoice/create-invoice.slice';

const CreateInvoice = () => {
    const dispatch = useDispatch()
    const [invoicetitle, setInvoicetitle] = useState("001")
    const { invoiceData } = useSelector(state => state.createInvoice)
    const { logo } = invoiceData

    return (
        <React.Fragment>
            <InvoiceNavbar />
            <StyledCreateInvoice>
                <Container>
                    <StyledInvoiceBuilderHeader>
                        <div className='invoiceBuilderTitle'>
                            <div className='invoiceBuilderTitle_web'>
                                <div className='invoiceBuilderTitle_web_input'>
                                    <label htmlFor="invoiceNo">Invoice:</label>
                                    <input
                                        type="number"
                                        id='invoiceNo'
                                        value={invoicetitle}
                                        onChange={(e) => setInvoicetitle(e.target.value)}
                                    />
                                </div>
                                {/* <div className='invoiceBuilderTitle_web_icon'>
                                    <Image
                                        width={20}
                                        height={20}
                                        alt='editIcon'
                                        src='/images/editIcon.svg'
                                    />
                                </div> */}
                            </div>
                            <div className='invoiceBuilderTitle_mobile'>
                                <Image
                                    width={65}
                                    height={65}
                                    alt='settingIcon'
                                    src='/images/settingIcon.svg'
                                    onClick={() => setSettingDrawer(true)}
                                />
                                {/* <SettingDrawer
                            settingDrawer={settingDrawer}
                            setSettingDrawer={setSettingDrawer}>
                            <InvoiceSetting defaultColors={defaultColors} />
                        </SettingDrawer> */}
                            </div>
                        </div>

                        <div className='invoiceBuilderHeaderBtns'>
                            <CustomButton
                                fs='16px'
                                title='Save'
                                bg='#FFFFFF;'
                                pd={"10px 24px"}
                                color={Colors.primary}
                                border={`1px solid ${Colors.primary}`}
                                clicked={() => setSaveInfoModal(true)}
                            />

                            <PDFDownloadLink
                                fileName="invoice.pdf"
                                document={
                                    <PDFDocument
                                        invoiceData={[]}
                                    />
                                }
                            >
                                {({ blob, url, loading, error }) => {
                                    return (
                                        <CustomButton
                                            fs='16px'
                                            width="100%"
                                            color='#FFFFFF'
                                            pd={"10px 24px"}
                                            bg={Colors.primary}
                                            title='Download PDF'
                                        />
                                    )
                                }}
                            </PDFDownloadLink>
                        </div>
                    </StyledInvoiceBuilderHeader>
                    <InvoiceBuilderForm />
                </Container>

                <Palette
                    src={logo}
                    format='hex'
                    colorCount={16}
                    crossOrigin='anonymous'
                >
                    {({ data, loading }) =>
                        loading
                            ? null
                            : data?.length
                        // ? dispatch(setPaletteColors(data))
                        // : null
                    }
                </Palette>
                {/* <SaveInfoModal openModal={saveInfoModal} closeModal={setSaveInfoModal} /> */}
            </StyledCreateInvoice>
            <Footer />
        </React.Fragment>
    )
}

export default CreateInvoice