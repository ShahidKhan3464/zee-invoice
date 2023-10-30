"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import ResetPassword from "@/pages/reset-password/reset-password";

export default function Home() {
    return <Auth component={<ResetPassword />} type={AUTH.ONLY_PUBLIC} />;
}