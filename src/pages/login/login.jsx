"use client";

import React from 'react';
import * as Yup from "yup";
import Link from 'next/link';
import Image from 'next/image';
import { Formik, Form } from "formik";
import { Icons } from "@/common/assets";
import Footer from "@/common/components/footer";
import { useGoogleLogin } from '@react-oauth/google';
import FormControl from "@/common/utils/form-control";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton, StyledBox } from '@/common/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { login, loginWithOAuthGoogle } from "@/provider/features/auth/auth.slice";

const Login = () => {
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.auth.login)
    const a = useSelector(state => state.auth.loginWithOAuthGoogle)
    console.log(a)

    const initialValues = {
        email: "",
        password: ""
    }

    const loginWithGoogle = useGoogleLogin({
        onSuccess: tokenResponse => dispatch(loginWithOAuthGoogle(tokenResponse.access_token))
    })

    const moveRouter = () => {
        alert('success')
    }

    const handleSubmit = (data) => {
        dispatch(login({ userData: data, successCallBack: moveRouter }))
    }

    return (
        <React.Fragment>
            <StyledBox>
                <div className='content'>
                    <div className='content_top'>
                        <h2>Login</h2>
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

                                        <div className='forgot-password'>
                                            <Link href="/forgot-password" replace={false}>Forgot password?</Link>
                                        </div>

                                        <div className="btn-container">
                                            <PrimaryButton
                                                type='submit'
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <CircularProgress size={22} color='inherit' />
                                                ) : (
                                                    <span>Login</span>
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
                            <span>Don{"'"}t have an account?</span>
                            <Link href="/sign-up" replace={false}>Sign up</Link>
                        </div>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default Login
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
    password: Yup.string()
        .required('This field is required')
        .min(8, 'Password can have min 8 characters')
        .max(20, 'Password can have max 20 characters')
});