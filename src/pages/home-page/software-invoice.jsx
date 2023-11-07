"use client";

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { StyledSoftwareInvoice } from './style';
import Colors from '@/common/constants/color.constant';
import CustomButton from '@/common/components/custom-button';

const SoftwareInvoice = () => {
    const route = useRouter()

    return (
        <StyledSoftwareInvoice>
            <div className="softwareInvoice_main">
                <Container>
                    <div className="softwareInvoice_main_content">
                        <div className="softwareInvoice_main_content_img">
                            <Image
                                width={512}
                                height={483}
                                alt='customInvoice'
                                src={Icons.customInvoice}
                            />
                        </div>
                        <div className="softwareInvoice_main_content_detail">
                            <h1>How Software Invoicing can help small business</h1>
                            <p>
                                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                            </p>
                            <p>
                                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                            </p>
                            <div className="softwareInvoice_main_content_detail_btn">
                                <CustomButton
                                    fs='22px'
                                    radius="10px"
                                    pd={'19px 32px'}
                                    color='#FFFFFF'
                                    bg={Colors.primary}
                                    title='Generate Invoice'
                                    clicked={() => route.push('/create-invoice')}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </StyledSoftwareInvoice>
    )
}

export default SoftwareInvoice