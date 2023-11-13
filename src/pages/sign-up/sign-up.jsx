"use client";

import * as Yup from "yup";
import Link from 'next/link';
import Image from 'next/image';
import { Formik, Form } from "formik";
import { Icons } from "@/common/assets";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Checkbox from '@mui/material/Checkbox';
import Footer from "@/common/components/footer";
import { useGoogleLogin } from '@react-oauth/google';
import FormControl from "@/common/utils/form-control";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton, StyledBox } from '@/common/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { signup, signupWithOAuthGoogle } from "@/state/features/auth/auth.slice";

const SignUp = () => {
    const route = useRouter()
    const dispatch = useDispatch()
    const [termsCondition, setTermsCondition] = useState(false)
    const { isLoading } = useSelector(state => state.auth.signup)

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    const loginWithGoogle = useGoogleLogin({
        onSuccess: tokenResponse => dispatch(signupWithOAuthGoogle(tokenResponse.access_token))
    })

    const moveRouter = (email) => {
        route.push(`/verify-email?email=${email}`)
    }

    const handleSubmit = (data) => {
        dispatch(signup({ userData: data, successCallBack: moveRouter }))
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
                            onSubmit={handleSubmit}
                        >
                            {(formik) => {
                                return (
                                    <Form
                                        noValidate
                                        name='basic'
                                        autoComplete='off'
                                        onFinish={formik.handleSubmit}
                                    >
                                        <div className='field-control'>
                                            <FormControl
                                                label=''
                                                type='text'
                                                name='name'
                                                control='input'
                                                placeholder='Name'
                                                className={
                                                    formik.errors.name && formik.touched.name
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

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
                                                name='confirm_password'
                                                placeholder='Confrim Password'
                                                className={
                                                    formik.errors.confirm_password && formik.touched.confirm_password
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
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
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
                            <button
                                type="button"
                                onClick={() => loginWithGoogle()}
                            >
                                <Image
                                    width={24}
                                    height={24}
                                    alt='google'
                                    src={Icons.google}
                                />
                                <span>Google</span>
                            </button>
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
    name: Yup.string()
        .required('This field is required')
        .matches(/^[A-Za-z]+$/, 'Name should contain only alphabets'),
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
    password: Yup.string()
        .required('This field is required')
        .min(8, 'Password must contain min 8 characters')
        .max(20, 'Password can have max 20 characters')
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/, 'Password must contain at least one upper-case letter, one lower-case letter, one numeric character, and one special character'),
    confirm_password: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('password'), null], 'The password and confirm password are incorrect'),
});