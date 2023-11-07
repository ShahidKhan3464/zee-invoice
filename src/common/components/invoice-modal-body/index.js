"use client";

import React from 'react';
import * as Yup from "yup";
import { Form } from 'antd';
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import { StyledInvoiceModalBody } from './style';
import FormControl from '@/common/utils/form-control';
import Colors from '@/common/constants/color.constant';
import CustomButton from '@/common/components/custom-button';
import { setReceiverDetail, setSenderDetail } from '@/provider/features/create-invoice/create-invoice.slice';

const initialValues = {
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    state: "",
}

const InvoiceModalBody = ({ specificUser, setGenerateInvoiceModal }) => {
    const dispatch = useDispatch()

    const onSubmit = (values, { resetForm }) => {
        resetForm()
        if (specificUser === "sender") {
            setGenerateInvoiceModal(false)
            dispatch(setSenderDetail(values))
        }
        else if (specificUser === "receiver") {
            setGenerateInvoiceModal(false)
            dispatch(setReceiverDetail(values))
        }
    }

    return (
        <StyledInvoiceModalBody>
            <Formik
                onSubmit={onSubmit}
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {(formik) => {
                    return (
                        <Form
                            name='basic'
                            autoComplete='off'
                            onFinish={formik.handleSubmit}
                        >
                            <div className='basicInformation'>
                                <h1>Basic Information</h1>
                                <div className='fieldInputPair'>
                                    <FormControl
                                        type='text'
                                        name='name'
                                        label='Name*'
                                        control='input'
                                        placeholder='Enter name'
                                        className={
                                            formik.errors.name && formik.touched.name
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />
                                    <FormControl
                                        type='text'
                                        name='company'
                                        control='input'
                                        label='Company Name*'
                                        placeholder='Enter individual or company name'
                                        className={
                                            formik.errors.company && formik.touched.company
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />
                                </div>

                                <div style={{ marginTop: '16px' }} className='fieldInputPair'>
                                    <FormControl
                                        type='text'
                                        name='email'
                                        label='Email*'
                                        control='input'
                                        placeholder='example@gmail.com'
                                        className={
                                            formik.errors.email && formik.touched.email
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />
                                    <FormControl
                                        name='phone'
                                        control='phoneField'
                                        label='Phone Number*'
                                        className={
                                            formik.errors.phone && formik.touched.phone
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />
                                </div>
                            </div>
                            <div className='addressInformation'>
                                <h1>Address Information</h1>

                                <div className='fieldInputPair'>
                                    <FormControl
                                        name='country'
                                        label='Country*'
                                        defaultValue='PK'
                                        control='countrySelect'
                                        placeholder='Select Country'
                                        className={
                                            formik.errors.country && formik.touched.country
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />

                                    <FormControl
                                        type='text'
                                        name='state'
                                        label='State*'
                                        control='input'
                                        placeholder='State Name'
                                        className={
                                            formik.errors.state && formik.touched.state
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />
                                </div>

                                <div style={{ marginTop: '16px' }} className='fieldInputPair'>
                                    <FormControl
                                        name='city'
                                        label='City*'
                                        control='input'
                                        placeholder='City Name'
                                        className={
                                            formik.errors.city && formik.touched.city
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />

                                    <FormControl
                                        type='text'
                                        name='address'
                                        control='input'
                                        placeholder='Address'
                                        label='Street Address*'
                                        className={
                                            formik.errors.address && formik.touched.address
                                                ? "is-invalid"
                                                : "customInput"
                                        }
                                    />
                                </div>
                            </div>
                            <div className='informationBtn'>
                                <CustomButton
                                    fs='16px'
                                    width="100%"
                                    pd={"11px 0"}
                                    type="submit"
                                    color='#FFFFFF'
                                    bg={Colors.primary}
                                    title={`Add ${specificUser === 'sender' ? 'Sender' : 'Recipient'}`}
                                />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </StyledInvoiceModalBody>
    )
}

export default InvoiceModalBody
const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required!")
        .min(6, 'Name must be at least 6 characters long')
        .max(32, "Name cannot exceed 32 characters"),
    company: Yup.string()
        .min(6, 'Company must be at least 6 characters long')
        .max(50, "Company cannot exceed 50 characters"),
    email: Yup.string()
        .required("Email is required!"),
    phone: Yup.string()
        .required("Phone is required!"),
    country: Yup.string()
        .required("Country is required!"),
    address: Yup.string()
        .required("Address is required!")
        .min(6, 'Address must be at least 6 characters long')
        .max(255, "Address cannot exceed 255 characters"),
    city: Yup.string()
        .required("City is required!")
        .min(6, 'City must be at least 6 characters long')
        .max(15, "City cannot exceed 15 characters"),
    state: Yup.string()
        .min(6, 'State must be at least 6 characters long')
        .max(15, "State cannot exceed 15 characters"),
})