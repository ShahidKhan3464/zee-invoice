"use client";

import React from 'react';
import Image from 'next/image';
import { Images } from '@/common/assets';
import { Container } from '@mui/material';
import { StyledAmazingFeatureSection } from './style';

const AmazingFeature = () => {

    return (
        <StyledAmazingFeatureSection>
            <Container>
                <div className="amazingfeature_heading">
                    <h1>Amazing Feature</h1>
                </div>

                <div className="amazingfeature_cards">
                    <div className="amazingfeature_cards_card">
                        <div className="amazingfeature_cards_card_icon">
                            <Image
                                width='60'
                                height='60'
                                alt='easyToUse'
                                src={Images.easyToUse}
                            />
                        </div>
                        <div className="amazingfeature_cards_card_detail">
                            <h1>Easy to use</h1>
                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                        </div>
                    </div>
                    <div className="amazingfeature_cards_card">
                        <div className="amazingfeature_cards_card_icon">
                            <Image
                                width='60'
                                height='60'
                                alt='customColor'
                                src={Images.customColor}
                            />
                        </div>
                        <div className="amazingfeature_cards_card_detail">
                            <h1>Custome color</h1>
                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                        </div>
                    </div>
                    <div className="amazingfeature_cards_card">
                        <div className="amazingfeature_cards_card_icon">
                            <Image
                                width='60'
                                height='60'
                                alt='freeGenerate'
                                src={Images.freeGenerate}
                            />
                        </div>
                        <div className="amazingfeature_cards_card_detail">
                            <h1>Free  Generate</h1>
                            <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                        </div>
                    </div>
                </div>
            </Container>
        </StyledAmazingFeatureSection>
    )
}

export default AmazingFeature