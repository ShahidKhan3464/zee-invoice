import React from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { InvoiceMobileNavstyle } from "./style";

const Index = ({ mobileNav, setMobileNav }) => {

  return (
    <Drawer
      height='282'
      size='small'
      placement='top'
      open={mobileNav}
      className='customizemobileDrawer'
      onClose={() => setMobileNav(false)}
    >
      <InvoiceMobileNavstyle>
        <div className='invoice_mobile_nav_content'>
          <div className='invoice_mobile_nav_content_logo'>
            <picture>
              <img src='images/invoiceBuilderMobileLogo.png' alt='logo' />
            </picture>
          </div>
          <div className='invoice_mobile_nav_content_links'>
            <Link href='#' className='invoice_mobile_nav_content_links_link'>
              <picture>
                <img src='images/invoicesicon.svg' alt='invoicesicon.svg' />
              </picture>
              <p>Invoices</p>
            </Link>
            <Link href='#' className='invoice_mobile_nav_content_links_link'>
              <picture>
                <img src='images/clientsIcon.svg' alt='clientsIcon.svg' />
              </picture>
              <p>Clients</p>
            </Link>
            <Link href='#' className='invoice_mobile_nav_content_links_link'>
              <picture>
                <img src='images/detailIcon.svg' alt='detailIcon.svg' />
              </picture>
              <p>My Details</p>
            </Link>
          </div>
        </div>
      </InvoiceMobileNavstyle>
    </Drawer>
  )
}

export default Index