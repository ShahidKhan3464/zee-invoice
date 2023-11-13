"use client";

import Homepage from "@/pages/home-page";
import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";

export default function Home() {
  return <Auth component={<Homepage />} type={AUTH.ONLY_PUBLIC} />;
}