"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import CheckInbox from "@/pages/check-inbox/check-inbox";

export default function Home() {
    return <Auth component={<CheckInbox />} type={AUTH.ONLY_PUBLIC} />;
}