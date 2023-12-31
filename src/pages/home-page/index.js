"use client";

import React from 'react';
import MockUp from './mockup';
import Footer from './footer';
import HeroSection from './hero';
import SaveTime from './save-time';
import GetInTouch from './get-in-touch';
import SmartInvoice from './smart-invoice';
import AmazingFeature from './amazing-feature';
import Navbar from '@/common/components/navbar';
import SoftwareInvoice from './software-invoice';

const Index = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <MockUp />
            <AmazingFeature />
            <SoftwareInvoice />
            <SmartInvoice />
            <SaveTime />
            <GetInTouch />
            <Footer />
        </div>
    )
}

export default Index