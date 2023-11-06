"use client";

import React from 'react';
import Image from 'next/image';
import { Images } from '@/common/assets';
import { StyledSaveTime } from './style';
import { Container } from '@mui/material';

const SaveTime = () => {

    return (
        <StyledSaveTime>
            <div className='saveTime_main'>
                <Container>
                    <div className="saveTime_main_content">
                        <div className="saveTime_main_content_detail">
                            <h1>Save time and get paid fast</h1>
                            <p>
                                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                Lorem ipsum may be used as a placeholder before final copy is available.
                            </p>
                            <p>
                                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                            </p>
                        </div>
                        <div className="saveTime_main_content_image">
                            <Image
                                width={630}
                                height={372}
                                alt='userInvoice'
                                src={Images.userInvoice}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </StyledSaveTime>
    )
}

export default SaveTime