"use client";

import { Modal } from "antd";
import Image from 'next/image';
import SaveInfo from "./save-info";
import { saveAs } from 'file-saver';
import { Container } from "@mui/material";
import { pdf } from "@react-pdf/renderer";
import { Palette } from "color-thief-react";
import InvoiceSetting from './invoice-setting';
import Footer from "@/common/components/footer";
import React, { useState, useEffect } from "react";
import Colors from "@/common/constants/color.constant";
import { useDispatch, useSelector } from 'react-redux';
import InvoiceBuilderForm from "./invoice-builder-form";
import PDFDocument from '@/common/components/pdf-template';
import CustomButton from "@/common/components/custom-button";
import InvoiceNavbar from "@/common/components/valid-user-navbar";
import { StyledCreateInvoice, StyledInvoiceBuilderForm, StyledInvoiceBuilderHeader } from "./style";
import { setInvoiceNo, setPaletteColors } from '@/state/features/create-invoice/create-invoice.slice';

const CreateInvoice = () => {
    const dispatch = useDispatch()
    const [colors, setColors] = useState(null)
    const [saveInfoModal, setSaveInfoModal] = useState(false)
    const { invoiceData, defaultColor, isInvoiceTax } = useSelector(state => state.createInvoice)
    const { no, logo, type, senderDetail, receiverDetail, items } = invoiceData
    // const isPdfRendered = type && senderDetail && receiverDetail && items.length > 0
    const isPdfRendered = true
    const isToken = false

    const handlePdfDownload = async () => {
        if (isPdfRendered) {
            const doc = pdf(
                <PDFDocument
                    isToken={isToken}
                    invoiceData={invoiceData}
                    defaultColor={defaultColor}
                    isInvoiceTax={isInvoiceTax}
                />
            )
            const blob = await doc.toBlob()
            saveAs(blob, 'invoice.pdf')
        }
    }

    useEffect(() => {
        const randomNumber = Math.floor(10000 + Math.random() * 90000)
        dispatch(setInvoiceNo(randomNumber))
    }, [dispatch])

    useEffect(() => {
        colors && dispatch(setPaletteColors(colors))
    }, [colors, dispatch])

    return (
        <React.Fragment>
            {saveInfoModal && (
                <Modal
                    centered
                    width='520px'
                    footer={false}
                    open={saveInfoModal}
                    onCancel={() => setSaveInfoModal(false)}
                >
                    <SaveInfo />
                </Modal>
            )}
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

                            <CustomButton
                                fs='16px'
                                width="100%"
                                pd={"10px 24px"}
                                color='#FFFFFF'
                                title='Download PDF'
                                disabled={!isPdfRendered}
                                clicked={handlePdfDownload}
                                bg={!isPdfRendered ? '#D1D5DB' : Colors.primary}
                            />

                            {/* <PDFDownloadLink
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
                                            title='Download PDF'
                                            disabled={!isPdfRendered}
                                            bg={!isPdfRendered ? '#D1D5DB' : Colors.primary}
                                        />
                                    )
                                }}
                            </PDFDownloadLink> */}
                        </div>
                    </StyledInvoiceBuilderHeader>

                    <StyledInvoiceBuilderForm
                        invoicebuildercolor={defaultColor}
                    >
                        <InvoiceBuilderForm />
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
            </StyledCreateInvoice>
            <Footer />
        </React.Fragment>
    )
}

export default CreateInvoice