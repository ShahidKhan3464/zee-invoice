"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Icons } from "@/common/assets";
// import MobileNavbar from "./mobileNavbar";
import { Container } from "@mui/material";
import { useRouter } from 'next/navigation';
import { StyledValidUserNavbar } from "./style";
import Colors from "@/common/constants/color.constant";
import CustomButton from "@/common/components/custom-button";
// import CustomButton from "components/customButton";
// import { primaryColor, secondaryColor } from 'styles/global';

const ValidUserNavbar = () => {
  const route = useRouter()
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <StyledValidUserNavbar>
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
            <div className='navbar_content_btns_login'>
              <CustomButton
                fs='16px'
                title='Login'
                bg="transparent"
                pd={'10px 16px'}
                color={Colors.secondary}
                clicked={() => route.push('/login')}
              />
            </div>

            <div className='navbar_content_btns_signUp'>
              <CustomButton
                fs='16px'
                title='Sign Up'
                color='#FFFFFF'
                pd={'10px 24px'}
                bg={Colors.primary}
                clicked={() => route.push('/sign-up')}
              />
            </div>
          </div>
        </div>
      </Container>
      {/* <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} /> */}
    </StyledValidUserNavbar>
  )
}

export default ValidUserNavbar