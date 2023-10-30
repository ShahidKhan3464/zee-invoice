"use client";

export const getAccessToken = () => {
  if (typeof window === "object") {
    const user = window.localStorage?.getItem("user");
    if (user !== null) {
      return JSON.parse(user).id_token;
    }
  }
  return undefined;
};

export const isLoginVerified = () => {
  if (typeof window === "object") {
    const user = window.localStorage?.getItem("user");
    if (user !== null) {
      return JSON.parse(user).isLoginVerified;
    }
  }
  return false;
};