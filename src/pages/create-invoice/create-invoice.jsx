"use client";

import Image from 'next/image';
import { Container } from "@mui/material";
import { Palette } from "color-thief-react";
import InvoiceSetting from './invoice-setting';
import Footer from "@/common/components/footer";
import React, { useState, useMemo, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Colors from "@/common/constants/color.constant";
import { useDispatch, useSelector } from 'react-redux';
import InvoiceBuilderForm from "./invoice-builder-form";
import PDFDocument from '@/common/components/pdf-template';
import CustomButton from "@/common/components/custom-button";
import InvoiceNavbar from "@/common/components/valid-user-navbar";
import { StyledCreateInvoice, StyledInvoiceBuilderForm, StyledInvoiceBuilderHeader } from "./style";
import { setInvoiceNo, setPaletteColors } from '@/provider/features/create-invoice/create-invoice.slice';

const CreateInvoice = () => {
    const dispatch = useDispatch()
    const [colors, setColors] = useState(null)
    const { invoiceData, defaultColor } = useSelector(state => state.createInvoice)
    const { no, logo, type, date, senderDetail, receiverDetail, items, additionalNote } = invoiceData
    const isPdfRendered = type && date && senderDetail && receiverDetail && additionalNote && items.length > 0

    // const MemoizedInvoiceBuilderForm = useMemo(() => {
    //     return <InvoiceBuilderForm invoicetitle={invoicetitle} />

    // }, [invoicetitle])

    useEffect(() => {
        const randomNumber = Math.floor(10000 + Math.random() * 90000)
        dispatch(setInvoiceNo(randomNumber))
    }, [dispatch])

    useEffect(() => {
        colors && dispatch(setPaletteColors(colors))
    }, [colors, dispatch])

    return (
        <React.Fragment>
            <InvoiceNavbar />
            <StyledCreateInvoice>
                <Container>
                    <StyledInvoiceBuilderHeader>
                        <div className='invoiceBuilderTitle'>
                            <div className='invoiceBuilderTitle_web'>
                                <div className='invoiceBuilderTitle_web_invoiceNo'>
                                    <p>Invoice:</p>
                                    <span>{no}</span>
                                </div>
                            </div>
                            <div className='invoiceBuilderTitle_mobile'>
                                <Image
                                    width={65}
                                    height={65}
                                    alt='settingIcon'
                                    src='/images/settingIcon.svg'
                                    onClick={() => setSettingDrawer(true)}
                                />
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
                                        invoiceData={invoiceData}
                                        defaultColor={defaultColor}
                                    />
                                }
                            >
                                {({ blob, url, loading, error }) => {
                                    return (
                                        <CustomButton
                                            fs='16px'
                                            width="100%"
                                            pd={"10px 24px"}
                                            color='#FFFFFF'
                                            bg={Colors.primary}
                                            title='Download PDF'
                                        />
                                    )
                                }}
                            </PDFDownloadLink>
                        </div>
                    </StyledInvoiceBuilderHeader>

                    <StyledInvoiceBuilderForm
                        invoicebuildercolor={defaultColor}
                    >
                        <InvoiceBuilderForm />
                        {/* {MemoizedInvoiceBuilderForm} */}
                        <InvoiceSetting />
                    </StyledInvoiceBuilderForm>
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
                                ? setColors(data)
                                : null
                    }
                </Palette>
                {/* <SaveInfoModal openModal={saveInfoModal} closeModal={setSaveInfoModal} /> */}
            </StyledCreateInvoice>
            <Footer />
        </React.Fragment>
    )
}

export default CreateInvoice