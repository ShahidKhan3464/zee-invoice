"use client";

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import { Container } from '@mui/material';
import { StyledSmartInvoice } from './style';

const SmartInvoice = () => {

    return (
        <StyledSmartInvoice>
            <Container>
                <div className="smartInvoice_content">
                    <div className="smartInvoice_content_heading">
                        <h1>Smart Invoicing for small businesses & freelancers</h1>
                    </div>
                    <div className="smartInvoice_content_cards">
                        <div className="smartInvoice_content_cards_card">
                            <div className="smartInvoice_content_cards_card_icon">
                                <Image
                                    width='39'
                                    height='39'
                                    alt='customIcon'
                                    src={Icons.customIcon}
                                />
                            </div>
                            <div className="smartInvoice_content_cards_card_detail">
                                <h1>Convert quote into invoice in single click</h1>
                                <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                            </div>
                        </div>
                        <div className="smartInvoice_content_cards_card">
                            <div className="smartInvoice_content_cards_card_icon">
                                <Image
                                    width='39'
                                    height='39'
                                    alt='customIcon'
                                    src={Icons.customIcon}
                                />
                            </div>
                            <div className="smartInvoice_content_cards_card_detail">
                                <h1>Easy to use</h1>
                                <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                            </div>
                        </div>
                        <div className="smartInvoice_content_cards_card">
                            <div className="smartInvoice_content_cards_card_icon">
                                <Image
                                    width='39'
                                    height='39'
                                    alt='customIcon'
                                    src={Icons.customIcon}
                                />
                            </div>
                            <div className="smartInvoice_content_cards_card_detail">
                                <h1>Easy to use</h1>
                                <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                            </div>
                        </div>
                        <div className="smartInvoice_content_cards_card">
                            <div className="smartInvoice_content_cards_card_icon">
                                <Image
                                    width='39'
                                    height='39'
                                    alt='customIcon'
                                    src={Icons.customIcon}
                                />
                            </div>
                            <div className="smartInvoice_content_cards_card_detail">
                                <h1>Send Invoice And qoute</h1>
                                <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                            </div>
                        </div>
                        <div className="smartInvoice_content_cards_card">
                            <div className="smartInvoice_content_cards_card_icon">
                                <Image
                                    width='39'
                                    height='39'
                                    alt='customIcon'
                                    src={Icons.customIcon}
                                />
                            </div>
                            <div className="smartInvoice_content_cards_card_detail">
                                <h1>Send Invoice And qoute</h1>
                                <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                            </div>
                        </div>
                        <div className="smartInvoice_content_cards_card">
                            <div className="smartInvoice_content_cards_card_icon">
                                <Image
                                    width='39'
                                    height='39'
                                    alt='customIcon'
                                    src={Icons.customIcon}
                                />
                            </div>
                            <div className="smartInvoice_content_cards_card_detail">
                                <h1>save your customer details</h1>
                                <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </StyledSmartInvoice>
    )
}

export default SmartInvoice