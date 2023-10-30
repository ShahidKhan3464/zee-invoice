"use client";

import Auth from "@/auth/auth.component";
import SignUp from "@/pages/sign-up/sign-up";
import AUTH from "@/common/constants/auth.constant";

export default function Home() {
    return <Auth component={<SignUp />} type={AUTH.ONLY_PUBLIC} />;
}