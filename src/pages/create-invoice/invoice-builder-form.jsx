"use client";

import dayjs from 'dayjs';
import Image from 'next/image';
import CountryData from "country-data";
import { Icons } from '@/common/assets';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Input, InputNumber, DatePicker } from "antd";
import InvoiceListItemAddition from './invoice-listItem-addition';
import InvoiceModalBody from '@/common/components/invoice-modal-body';
import { setDate, setDueDate, setLogo, setType, setRemoveItem, setAdditionalNote, setEditableField } from '@/provider/features/create-invoice/create-invoice.slice';
const { TextArea } = Input;

const InvoiceBuilderForm = () => {
    const dispatch = useDispatch()
    const currentDate = new Date()
    const fileInputRef = useRef(null)
    const [specificUser, setSpecificUser] = useState("")
    const [generateInvoiceModal, setGenerateInvoiceModal] = useState(false)
    const { invoiceData, editableField, isInvoiceTax, isInvoiceDueDate } = useSelector(state => state.createInvoice)
    const { logo, senderDetail, receiverDetail, date, items, additionalNote, currency } = invoiceData

    const SenderInputBox = () => {
        return (
            <div className='invoice_builder_page_body_from_senderDetail'>
                <h1>Sender Details</h1>
                <div
                    className='invoice_builder_page_body_from_senderDetail_btn'
                    onClick={() => {
                        setSpecificUser("sender")
                        setGenerateInvoiceModal(true)
                    }}
                >
                    <Image
                        width={50}
                        height={50}
                        alt='detailPlus'
                        src={Icons.plus}
                    />
                    <p>Add New Sender</p>
                </div>
            </div>
        )
    }

    const ReceiverInputBox = () => {
        return (
            <div className='invoice_builder_page_body_to_receiverDetail'>
                <h1>Recipient Details</h1>
                <div
                    className='invoice_builder_page_body_to_receiverDetail_btn'
                    onClick={() => {
                        setSpecificUser("receiver")
                        setGenerateInvoiceModal(true)
                    }}
                >
                    <Image
                        width={50}
                        height={50}
                        alt='detailPlus'
                        src={Icons.plus}
                    />
                    <p>Add New Recipient</p>
                </div>
            </div>
        )
    }

    const SenderDetailBox = ({ detail }) => {
        const countryName = CountryData.countries[detail.country].name
        return (
            <div className='invoice_builder_page_body_from_detail'>
                <div className='invoice_builder_page_body_from_detail_title'>
                    <h1>Sender Details</h1>
                    <Image
                        alt='edit'
                        width={20}
                        height={20}
                        src={Icons.edit}
                        onClick={() => {
                            setSpecificUser("sender")
                            setGenerateInvoiceModal(true)
                        }}
                    />
                </div>
                <h1>{detail.name}</h1>
                <p>{detail.address}, {detail.city}, {detail.state}</p>
                <p>{countryName}</p>
                <p>{detail.email}</p>
                <p>{detail.phone}</p>
            </div>
        )
    }

    const ReceiverDetailBox = ({ detail }) => {
        const countryName = CountryData.countries[detail.country].name
        return (
            <div className='invoice_builder_page_body_to_detail'>
                <div className='invoice_builder_page_body_to_detail_title'>
                    <h1>Recipient Details</h1>
                    <Image
                        alt='edit'
                        width={20}
                        height={20}
                        src={Icons.edit}
                        onClick={() => {
                            setSpecificUser("sender")
                            setGenerateInvoiceModal(true)
                        }}
                    />
                </div>
                <h1>{detail.name}</h1>
                <p>{detail.address}, {detail.city}, {detail.state}</p>
                <p>{countryName}</p>
                <p>{detail.email}</p>
                <p>{detail.phone}</p>
            </div>
        )
    }

    const calculatedTaxValue = (item) => {
        const valueWithoutTax = item.qty * item.rate
        const valueWithTax = valueWithoutTax * (item.tax / 100)
        const subTotal = valueWithTax + valueWithoutTax
        return subTotal
    }

    const calculatedSubTotalValue = () => {
        let sum = 0
        if (isInvoiceTax) {
            for (let i of items) {
                sum += calculatedTaxValue(i)
            }
        }
        else {
            for (let i of items) {
                const subTotal = i.qty * i.rate
                sum += subTotal
            }
        }
        return Math.floor(sum)
    }

    const handleTaxValue = (item) => {
        if (isInvoiceTax) {
            return Math.floor(calculatedTaxValue(item))
        }
        else {
            return Math.floor(
                item.qty * item.rate
            )
        }
    }

    const handleEditableInputField = (name, value) => {
        const obj = { ...editableField, [name]: value }
        dispatch(setEditableField(obj))
        // setEditableField({
        //     ...editableField,
        //     [name]: value,
        // })
    }

    const handleUploadInvoiceLogo = (e) => {
        const file = e.target.files[0]
        if (!file.name.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
            alert('Please select valid image')
            return false
        }
        const filePath = URL.createObjectURL(file)
        dispatch(setLogo(filePath))
    }

    useEffect(() => {
        dispatch(setDate(dayjs(currentDate).format('MMM DD, YYYY')))
    }, [dispatch])

    return (
        <React.Fragment>
            {generateInvoiceModal && (
                <Modal
                    centered
                    width={650}
                    footer={null}
                    open={generateInvoiceModal}
                    title={`Add ${specificUser === 'sender' ? 'Sender' : 'Recipient'} Detail`}
                    onCancel={() => {
                        setSpecificUser("")
                        setGenerateInvoiceModal(false)
                    }}
                >
                    <InvoiceModalBody
                        specificUser={specificUser}
                        setGenerateInvoiceModal={setGenerateInvoiceModal}
                    />
                </Modal>
            )}
            <div className='invoice_builder_page'>
                <div className='invoice_builder_page_header'>
                    <div className='invoice_builder_page_header_upload'>
                        {logo ? (
                            <div className="invoice_builder_page_header_upload_image">
                                <Image
                                    src={logo}
                                    width={60}
                                    height={60}
                                    alt='avatar'
                                />
                                <div className="image_hover_effect">
                                    <Image
                                        width={20}
                                        height={20}
                                        alt="plusWhite"
                                        src={Icons.plusWhite}
                                        onClick={() => {
                                            dispatch(setLogo(null))
                                            fileInputRef.current = null
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className='invoice_builder_page_header_upload_btn'>
                                <div className='invoice_builder_page_header_upload_btn_content'>
                                    <Image
                                        width={34}
                                        height={31}
                                        alt='uploadFileLogo'
                                        src={Icons.fileUploadLogo}
                                    />
                                    <div className='invoice_builder_page_header_upload_btn_content_file'>
                                        <p>Add your business logo</p>
                                        <h1>Select a file</h1>
                                    </div>
                                </div>
                                <input
                                    type='file'
                                    ref={fileInputRef}
                                    onChange={handleUploadInvoiceLogo}
                                />
                            </div>
                        )}
                    </div>
                    <div className='invoice_builder_page_header_select_invoice'>
                        <p>Invoice Type</p>
                        <select
                            onChange={(e) => dispatch(setType(e.target.value))}
                        >
                            <option value=''>Select</option>
                            <option value='sales invoice'>Sales invoice</option>
                            <option value='business invoice'>Business invoice</option>
                        </select>
                    </div>
                </div>

                <div className='invoice_builder_page_body'>
                    <div className='invoice_builder_page_body_from'>
                        <p>From</p>
                        {!senderDetail ? (
                            <SenderInputBox />
                        ) : (
                            <SenderDetailBox detail={senderDetail} />
                        )}
                    </div>
                    <div className='invoice_builder_page_body_to'>
                        <p>To</p>
                        {!receiverDetail ? (
                            <ReceiverInputBox />
                        ) : (
                            <ReceiverDetailBox detail={receiverDetail} />
                        )}
                    </div>
                </div>

                <div className="invoice_builder_page_controls">
                    <div className="invoice_builder_page_controls_date">
                        <p>Invoice Date:</p>
                        <span className='date'>{date}</span>
                        {/* <DatePicker
                            id='invoiceDate'
                            format="MMM DD, YYYY"
                            onChange={(date, dateString) => dispatch(setDate(dateString))}
                        /> */}
                    </div>
                    {isInvoiceDueDate && (
                        <div className="invoice_builder_page_controls_date">
                            <label htmlFor='dueDate'>Due Date:</label>
                            <DatePicker
                                id='dueDate'
                                format="MMM DD, YYYY"
                                onChange={(date, dateString) => dispatch(setDueDate(dateString))}
                            />
                        </div>
                    )}
                </div>

                <div className='invoice_builder_page_table'>
                    <div className='invoice_builder_page_table_header'>
                        <p style={{ width: '25%' }}>Items</p>
                        <p>QTY/HRS</p>
                        <p>Rate</p>
                        {isInvoiceTax && <p>Tax</p>}
                        <p>Subtotal</p>
                    </div>
                    {items.map((item) => {
                        return (
                            <div
                                key={item._id}
                                className='invoice_builder_page_table_row'
                            >
                                {editableField?._id == item._id ? (
                                    <div className='invoice_builder_page_table_editable'>
                                        <div className='invoice_builder_page_table_editable_inputs'>
                                            <Input
                                                name='item'
                                                value={editableField.item}
                                                placeholder='Name of your product or service'
                                                onChange={(e) => handleEditableInputField("item", e.target.value)}
                                            />
                                            <InputNumber
                                                max='99'
                                                name='qty'
                                                placeholder='1'
                                                value={editableField.qty}
                                                onChange={(e) => handleEditableInputField("qty", e)}
                                            />
                                            <InputNumber
                                                max='99'
                                                name='rate'
                                                placeholder='$ 0.0'
                                                value={editableField.rate}
                                                onChange={(e) => handleEditableInputField("rate", e)}
                                            />
                                            {isInvoiceTax && (
                                                <InputNumber
                                                    max='99'
                                                    name='tax'
                                                    placeholder='% 0.0'
                                                    value={editableField.tax}
                                                    onChange={(e) => handleEditableInputField("tax", e)}
                                                />
                                            )}

                                            <p>$ {handleTaxValue(item)}</p>
                                        </div>

                                        <div className='invoice_builder_page_table_editable_textarea'>
                                            <TextArea
                                                name='description'
                                                placeholder='Description'
                                                value={editableField.description}
                                                onChange={(e) => handleEditableInputField("description", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className='showCrossOnHover'>
                                        <div
                                            className='invoice_builder_page_table_row_body'
                                            onClick={() => dispatch(setEditableField(item))}
                                        >
                                            <p style={{ width: '25%' }}>{item.item}</p>
                                            <p>{item.qty}</p>
                                            <p>{item.rate}</p>
                                            {isInvoiceTax ? <p>{item.tax}</p> : null}
                                            <p>$ {handleTaxValue(item)}</p>
                                        </div>
                                        <h6 className="tableRowDescription" >{item.description}</h6>
                                        <span className='tableActions'>
                                            <Image
                                                alt='cross'
                                                src={Icons.cross}
                                                onClick={() => dispatch(setRemoveItem(item._id))}
                                            />
                                        </span>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                    <InvoiceListItemAddition />
                </div>

                <div className='invoice_builder_page_summary'>
                    <div className='invoice_builder_page_summary_header'>
                        <p>Invoice Summary</p>
                    </div>
                    <div className='invoice_builder_page_summary_body'>
                        <div className='invoice_builder_page_summary_body_subtotal'>
                            <p>Subtotal</p>
                            <h6>{currency}<span>{calculatedSubTotalValue()}</span></h6>
                        </div>
                        {isInvoiceTax && (
                            <div className='invoice_builder_page_summary_body_tax'>
                                <p>Tax</p>
                                <h6>--</h6>
                            </div>
                        )}
                        <div className='invoice_builder_page_summary_body_total'>
                            <p>Total</p>
                            <h6>{currency}<span>{calculatedSubTotalValue()}</span></h6>
                        </div>
                    </div>
                </div>

                <div className='invoice_builder_page_footer'>
                    <input
                        type='text'
                        value={additionalNote}
                        placeholder='Additional Note'
                        onChange={(e) => dispatch(setAdditionalNote(e.target.value))}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default InvoiceBuilderForm