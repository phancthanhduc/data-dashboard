//super important
"use client";
import { NextAuthProviderProps } from "@src/commons/typescripts";
import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>;
};
