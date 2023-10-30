"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import CreateInvoice from "@/pages/create-invoice/create-invoice";

export default function Home() {
    return <Auth component={<CreateInvoice />} type={AUTH.ONLY_PUBLIC} />;
}