"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import ForgotPassword from "@/pages/forgot-password/forgot-password";

export default function Home() {
    return <Auth component={<ForgotPassword />} type={AUTH.ONLY_PUBLIC} />;
}