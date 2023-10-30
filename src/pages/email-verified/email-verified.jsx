"use client";

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import { useRouter } from 'next/navigation';
import Footer from "@/common/components/footer";
import { PrimaryButton, StyledBox } from '@/common/styles';

const EmailVerified = () => {
    const route = useRouter()

    return (
        <React.Fragment>
            <StyledBox>
                <div className='content'>
                    <div className='content_top'>
                        <Image
                            width={46}
                            height={70}
                            alt='email-box-verified'
                            src={Icons.emailVerified}
                        />
                        <h2>Your email has been verified successfully</h2>
                        <p>
                            Thanks for verifying your email, Last name!
                        </p>
                    </div>

                    <div className="btn-container" style={{ marginTop: '50px' }}>
                        <PrimaryButton
                            type='button'
                            onClick={() => route.push('/login')}
                        >
                            <span>Continue</span>
                        </PrimaryButton>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default EmailVerified