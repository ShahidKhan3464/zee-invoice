"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import VerfiyEmail from "@/pages/verify-email/verify-email";

export default function Home() {
    return <Auth component={<VerfiyEmail />} type={AUTH.ONLY_PUBLIC} />;
}