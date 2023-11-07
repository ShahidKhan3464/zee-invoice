"use client";

import * as Yup from "yup";
import Link from "next/link";
import Image from 'next/image';
import { Formik, Form } from "formik";
import React, { useState } from 'react';
import { Images } from '@/common/assets';
import { StyledGetInTouch } from './style';
import { PrimaryButton } from '@/common/styles';
import FormControl from "@/common/utils/form-control";
import CircularProgress from '@mui/material/CircularProgress';
import { Checkbox, Container, FormControlLabel } from '@mui/material';

const GetInTouch = () => {
    const [loading, setLoading] = useState(false)
    const [termsCondition, setTermsCondition] = useState(false)

    const initialValues = {
        firstName: "",
        email: "",
        message: ""
    }

    return (
        <StyledGetInTouch>
            <Container>
                <div className='getInTouch_content'>
                    <div className='getInTouch_content_img'>
                        <Image
                            alt='getInTouch'
                            src={Images.getInTouch}
                        />
                    </div>

                    <div className='getInTouch_content_form'>
                        <div className='getInTouch_content_form_title'>
                            <h2>Get in touch</h2>
                            <p>Our friendly team would love to hear from you.</p>
                        </div>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        // onSubmit={handleSubmit}
                        >
                            {(formik) => {
                                return (
                                    <Form
                                        noValidate
                                        name='basic'
                                        autoComplete='off'
                                    // onFinish={formik.handleSubmit}
                                    >
                                        <div className='field-control'>
                                            <FormControl
                                                type='text'
                                                control='input'
                                                name='firstName'
                                                label='First name'
                                                placeholder='First name'
                                                className={
                                                    formik.errors.firstName && formik.touched.firstName
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

                                        <div className='field-control'>
                                            <FormControl
                                                type='text'
                                                name='email'
                                                label='Email'
                                                control='input'
                                                placeholder='you@company.com'
                                                className={
                                                    formik.errors.email && formik.touched.email
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

                                        <div className='field-control'>
                                            <FormControl
                                                type='text'
                                                name='message'
                                                label='Message'
                                                control='textarea'
                                                placeholder='Leave us a message...'
                                                className={
                                                    formik.errors.message && formik.touched.message
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

                                        <div className='privacy-policy'>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        className="checkbox"
                                                        checked={termsCondition}
                                                        onChange={(e) => setTermsCondition(e.target.checked)}
                                                    />
                                                }
                                                label={
                                                    <div>You agree to our friedly <Link href="/" className="policy">privacy policy</Link>.</div>
                                                }
                                            />
                                        </div>

                                        <div className="btn-container">
                                            <PrimaryButton
                                                type='submit'
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <CircularProgress size={22} color='inherit' />
                                                ) : (
                                                    <span>Submit</span>
                                                )}
                                            </PrimaryButton>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </Container>
        </StyledGetInTouch>
    )
}

export default GetInTouch
const validationSchema = Yup.object({
    firstName: Yup.string()
        .required('This field is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
    message: Yup.string()
        .required('This field is required')
        .min(10, 'Message can have min 10 characters')
        .max(500, 'Message can have max 500 characters')
});