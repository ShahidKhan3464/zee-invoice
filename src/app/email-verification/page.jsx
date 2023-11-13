"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import EmailVerification from "@/pages/email-verification/email-verification";

export default function Home() {
    return <Auth component={<EmailVerification />} type={AUTH.ONLY_PUBLIC} />;
}