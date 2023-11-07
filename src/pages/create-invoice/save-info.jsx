"use client";

import React from 'react';
import { StyledSaveInfo } from './style';

const SaveInfo = () => {

    return (
        <StyledSaveInfo>
            <div className='saveInfo_header'>
                <h2>Please login, create an account, or choose to download immediately</h2>
                <p>You can save and keep records of your invoices by just creating an account</p>
            </div>
            <div className='saveInfo_body'>
                <button
                    type='button'
                    className='account-btn'
                >
                    Create an account
                </button>
                <button
                    type='button'
                    className='login-btn'
                >
                    Login
                </button>
            </div>
            <div className='saveInfo_footer'>
                <div className='saveInfo_footer_divider'>
                    <span></span>
                    <p>OR</p>
                    <span></span>
                </div>
                <div className='saveInfo_footer_title'>
                    <h6>Download without an account</h6>
                </div>
            </div>
        </StyledSaveInfo>
    )
}

export default SaveInfo