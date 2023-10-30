"use client";

import React from 'react';
import Image from 'next/image';
import { Icons } from "@/common/assets";
import { useRouter } from 'next/navigation';
import Footer from "@/common/components/footer";
import { PrimaryButton, StyledBox } from '@/common/styles';

const PasswordChanged = () => {
    const route = useRouter()

    return (
        <React.Fragment>
            <StyledBox>
                <div className='content'>
                    <div className='content_top'>
                        <Image
                            width={46}
                            height={70}
                            alt='success-keys'
                            src={Icons.successKeys}
                        />
                        <h2>Password Changed</h2>
                        <p>
                            Your password has been changed successfully.
                        </p>
                    </div>

                    <div className="btn-container" style={{ marginTop: '40px' }}>
                        <PrimaryButton
                            type='button'
                            onClick={() => route.push('/login')}
                        >
                            <span>Go to login</span>
                        </PrimaryButton>
                    </div>
                </div>
            </StyledBox>
            <Footer />
        </React.Fragment>
    )
}

export default PasswordChanged