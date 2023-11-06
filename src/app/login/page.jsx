"use client";

import Login from "@/pages/login/login";
import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";

export default function Home() {
    return <Auth component={<Login />} type={AUTH.ONLY_PUBLIC} />;
}