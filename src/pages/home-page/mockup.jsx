"use client";

import React from 'react';
import Image from 'next/image';
import { Images } from '@/common/assets';
import { StyledInvoiceMockUp } from './style';

const MockUp = () => {

    return (
        <StyledInvoiceMockUp>
            <Image
                fill
                alt='mockUp'
                src={Images.invoiceMockUp}
            />
        </StyledInvoiceMockUp>
    )
}

export default MockUp