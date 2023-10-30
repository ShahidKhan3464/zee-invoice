"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import PasswordChanged from "@/pages/password-changed/password-changed";

export default function Home() {
    return <Auth component={<PasswordChanged />} type={AUTH.ONLY_PUBLIC} />;
}