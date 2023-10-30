"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import EmailVerified from "@/pages/email-verified/email-verified";

export default function Home() {
    return <Auth component={<EmailVerified />} type={AUTH.ONLY_PUBLIC} />;
}