"use client";

import store from "../state/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

export function ReduxProvider({ children }) {
    return (
        <Provider
            store={store}
        >
            {children}
        </Provider>
    );
}

export function GoogleProvider({ children }) {
    return (
        <GoogleOAuthProvider
            clientId={clientId}
        >
            {children}
        </GoogleOAuthProvider>
    );
}