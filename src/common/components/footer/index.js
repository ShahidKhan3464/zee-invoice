"use client";

import React from 'react';
import Image from 'next/image';
import { StyledFooter } from './style';
import { Icons } from '@/common/assets';
import { Container } from '@mui/material';

const Footer = () => {

    return (
        <StyledFooter>
            <div className='firstFooter'>
                <Container>
                    <div className='firstFooter_main'>
                        <div className='firstFooter_main_logo'>
                            <Image
                                width={80}
                                height={30}
                                alt='footer-logo'
                                src={Icons.footerLogo}
                            />
                        </div>
                        <div className='firstFooter_main_socialIcons'>
                            <Image
                                width={27}
                                height={27}
                                alt='twiterIcon.svg'
                                src={Icons.twitter}
                            />
                            <Image
                                width={27}
                                height={27}
                                alt='facebookIcon.svg'
                                src={Icons.ffacebook}
                            />
                            <Image
                                width={27}
                                height={27}
                                src={Icons.instagram}
                                alt='instagramIcon.svg'
                            />
                        </div>
                    </div>
                </Container>
            </div>

            <div className='secondFooter'>
                <Container>
                    <div className='secondFooter_main'>
                        <div className='secondFooter_main_links'>
                            <p>Terms and Conditions</p>
                            <p>Invoice Guide</p>
                            <p>Help</p>
                        </div>
                        <h6>© Copyright 2023, All Rights Reserved by ZAPTA Technologies</h6>
                    </div>
                </Container>
            </div>

        </StyledFooter>
    )
}

export default Footer