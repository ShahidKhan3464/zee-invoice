"use client";

import React from 'react';
import Image from 'next/image';
import { StyledFooter } from './style';
import { Icons } from '@/common/assets';
import { Container } from '@mui/material';

const SmartInvoice = () => {

    return (
        <StyledFooter>
            <Container>
                <div className="footer_content">
                    <div className="footer_content_detail">
                        <Image
                            width='128'
                            height='75'
                            alt='footerLogo'
                            src={Icons.footerZeeLogo}
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor in, accumsan non quam. Nam consectetur porttitor rhoncus. Curabitur eu est et leo feugiat auctor vel quis lorem.</p>
                    </div>
                    <div className="footer_content_bottom">
                        <p>
                            <span>Terms of Service</span>
                            <span>Privacy Policy </span>
                        </p>
                        <h6>© 2022 ZeeInvoices. All rights reserved.</h6>
                        <div className="footer_content_bottom_socialIcons">
                            <Image
                                width='39'
                                height='39'
                                alt='linkedin'
                                src={Icons.linkedin}
                            />
                            <Image
                                width='39'
                                height='39'
                                alt='facebook'
                                src={Icons.facebook}
                            />
                            <Image
                                width='39'
                                height='39'
                                alt='insta'
                                src={Icons.insta}
                            />
                            <Image
                                width='39'
                                height='39'
                                alt='youtube'
                                src={Icons.youtube}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </StyledFooter>
    )
}

export default SmartInvoice