"use client";

import React from 'react';
import { Container } from '@mui/material';
import { StyledHeroSection } from './style';
import { useRouter } from 'next/navigation';
import Colors from "@/common/constants/color.constant";
import CustomButton from '@/common/components/custom-button';

const Hero = () => {
    const route = useRouter()

    return (
        <StyledHeroSection>
            <div className='hero'>
                <Container>
                    <div className='hero_content'>
                        <div className='hero_content_heading'>
                            <p>
                                Easy invoice builder, made for EVERYONE
                            </p>
                            <h1>
                                Invoice that help businesses get paid faster
                            </h1>
                        </div>

                        <div className='hero_content_btn'>
                            <CustomButton
                                fs='22px'
                                radius="10px"
                                color='#FFFFFF'
                                pd={'19px 31px'}
                                bg={Colors.primary}
                                title='Create Invoice'
                                clicked={() => route.push('/create-invoice')}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </StyledHeroSection>
    )
}

export default Hero