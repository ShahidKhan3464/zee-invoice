"use client";

import * as Yup from "yup";
import Link from 'next/link';
import Image from 'next/image';
import { Formik, Form } from "formik";
import { Icons } from "@/common/assets";
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Footer from "@/common/components/footer";
import FormControl from "@/common/utils/form-control";
import { PrimaryButton, StyledBox } from '@/common/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const [termsCondition, setTermsCondition] = useState(false)

    const initialValues = {
        email: "",
        password: "",
        confirmPassword: ""
    }

    return (
        <React.Fragment>
            <StyledBox>
                <div className='content'>
                    <div className='content_top'>
                        <h2>Sign Up</h2>
                        <p>Save and manage your invoices with ZEE Invoices.</p>
                    </div>

                    <div className='content_form'>
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

                                        <div className='field-control'>
                                            <FormControl
                                                label=''
                                                type='text'
                                                name='password'
                                                control='input'
                                                placeholder='Password'
                                                className={
                                                    formik.errors.password && formik.touched.password
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

                                        <div className='field-control'>
                                            <FormControl
                                                label=''
                                                type='text'
                                                control='input'
                                                name='confirmPassword'
                                                placeholder='Confrim Password'
                                                className={
                                                    formik.errors.confirmPassword && formik.touched.confirmPassword
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

                                        <div className='terms-condition'>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        className="checkbox"
                                                        checked={termsCondition}
                                                        onChange={(e) => setTermsCondition(e.target.checked)}
                                                    />
                                                }
                                                label={
                                                    <div>I agree with the <Link href="/" className="terms-condition">terms & conditions</Link> on ZEE Invoices.</div>
                                                }
                                            />
                                        </div>

                                        <div className="btn-container">
                                            <PrimaryButton
                                                type='submit'
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <CircularProgress
                                                        size={22}
                                                        color='inherit'
                                                    />
                                                ) : (
                                                    <span>Sign Up</span>
                                                )}
                                            </PrimaryButton>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>

                    <div className="content_bottom">
                        <div className='continue-with'>
                            <div></div>
                            <div className='text'>Or continue with</div>
                            <div></div>
                        </div>

                        <div className="social-media_btn">
                            <button>
                                <Image
                                    width={24}
                                    height={24}
                                    alt='google'
                                    src={Icons.google}
                                />
                                <span>Google</span>
                            </button>
                            {/* <button>
                                <Image
                                    width={24}
                                    height={24}
                                    alt='facebook'
                                    src={Icons.facebook}
                                />
                                <span>Facebook</span>
                            </button>
                            <button>
                                <Image
                                    width={24}
                                    height={24}
                                    alt='apple'
                                    src={Icons.apple}
                                />
                                <span>Apple</span>
                            </button> */}
                        </div>

                        <div className='sign-up'>
                            <span>Already have an account?</span>
                            <Link href="/login" replace={false}>Login</Link>
                        </div>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default SignUp
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
    password: Yup.string()
        .required('This field is required')
        .min(8, 'Password must contain min 8 characters')
        .max(20, 'Password can have max 20 characters')
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/, 'Password must contain at least one upper-case letter, one lower-case letter, one numeric character, and one special character'),
    confirmPassword: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('password'), null], 'The password and confirm password are incorrect'),
});