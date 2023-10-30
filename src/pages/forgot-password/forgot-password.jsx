"use client";

import * as Yup from "yup";
import Link from 'next/link';
import Image from 'next/image';
import { Formik, Form } from "formik";
import { Icons } from "@/common/assets";
import React, { useState } from 'react';
import Footer from "@/common/components/footer";
import FormControl from "@/common/utils/form-control";
import { PrimaryButton, StyledBox } from '@/common/styles';
import CircularProgress from '@mui/material/CircularProgress';

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)

    return (
        <React.Fragment>
            <StyledBox>
                <div className='content'>
                    <div className='content_top'>
                        <Image
                            alt='keys'
                            width={46}
                            height={70}
                            src={Icons.keys}
                        />
                        <h2>Forgot password?</h2>
                        <p>Enter the email of your account and we will send the email to reset your password.</p>
                    </div>
                    <div className='content_form'>
                        <Formik
                            initialValues={{ email: "" }}
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
                                                label=''
                                                type='text'
                                                name='email'
                                                control='input'
                                                placeholder='Email Address'
                                                className={
                                                    formik.errors.email && formik.touched.email
                                                        ? "is-invalid"
                                                        : "customInput"
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
                                                    <span>Send</span>
                                                )}
                                            </PrimaryButton>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                    <div className="content_bottom">
                        <div className='login'>
                            <span>Remember the password?</span>
                            <Link href="/login" replace={false}>Login</Link>
                        </div>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default ForgotPassword
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
});