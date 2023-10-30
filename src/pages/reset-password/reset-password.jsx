"use client";

import * as Yup from "yup";
import Image from 'next/image';
import { Formik, Form } from "formik";
import { Icons } from "@/common/assets";
import React, { useState } from 'react';
import Footer from "@/common/components/footer";
import FormControl from "@/common/utils/form-control";
import { PrimaryButton, StyledBox } from '@/common/styles';
import CircularProgress from '@mui/material/CircularProgress';

const ResetPassword = () => {
    const [loading, setLoading] = useState(false)

    const initialValues = {
        newPassword: "",
        confirmNewPassword: ""
    }

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
                        <h2>Reset password</h2>
                        <p>
                            Create a new password for your account.
                        </p>
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
                                                control='input'
                                                name='newPassword'
                                                placeholder='Enter New Password'
                                                className={
                                                    formik.errors.newPassword && formik.touched.newPassword
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
                                                name='confirmNewPassword'
                                                placeholder='Confirm New Password'
                                                className={
                                                    formik.errors.confirmNewPassword && formik.touched.confirmNewPassword
                                                        ? "is-invalid"
                                                        : "customInput"
                                                }
                                            />
                                        </div>

                                        <div className="btn-container" style={{ marginTop: '20px' }}>
                                            <PrimaryButton
                                                type='submit'
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <CircularProgress size={22} color='inherit' />
                                                ) : (
                                                    <span>Reset Password</span>
                                                )}
                                            </PrimaryButton>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default ResetPassword
const validationSchema = Yup.object({
    newPassword: Yup.string()
        .required('This field is required')
        .min(8, 'Password must contain min 8 characters')
        .max(20, 'Password can have max 20 characters')
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/, 'Password must contain at least one upper-case letter, one lower-case letter, one numeric character, and one special character'),
    confirmNewPassword: Yup.string()
        .required('This field is required')
        .oneOf([Yup.ref('password'), null], 'The password and confirm password are incorrect'),
});