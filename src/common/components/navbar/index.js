"use client";

import Link from 'next/link';
import Image from 'next/image';
import { StyledNavbar } from "./style";
import { Icons } from '@/common/assets';
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Colors from "@/common/constants/color.constant";
import CustomButton from "@/common/components/custom-button";

const Navbar = () => {
    const route = useRouter()
    const [isNavbarBgColor, setIsNavbarBgColor] = useState(false)

    const changeNavbarBgColor = () => {
        if (window.scrollY > 100) {
            setIsNavbarBgColor(true)
        }
        else {
            setIsNavbarBgColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarBgColor)

        return () => {
            window.removeEventListener('scroll', changeNavbarBgColor)
        }
    }, [])

    return (
        <StyledNavbar isnavbarbgcolor={isNavbarBgColor}>
            <Container>
                <div className='navbar_content'>
                    <div className='navbar_content_logo'>
                        <Link href='/'>
                            <Image
                                alt='logo'
                                width='96'
                                height='36'
                                src={Icons.invoiceLogo}
                            />
                        </Link>
                    </div>

                    <div className='navbar_content_btns'>
                        <div className='navbar_content_btns_invoice'>
                            <CustomButton
                                fs='20px'
                                color='#FFFFFF'
                                pd={'12px 15px'}
                                bg={Colors.primary}
                                title='Create Invoice'
                                clicked={() => route.push('/create-invoice')}
                            />
                        </div>
                        <div className='navbar_content_btns_login'>
                            <CustomButton
                                fs='20px'
                                bg='#FFFFFF'
                                title='Login'
                                pd={'11px 30px'}
                                color={Colors.primary}
                                clicked={() => route.push('/login')}
                                border={`1px solid ${Colors.primary}`}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </StyledNavbar>
    )
}

export default Navbar