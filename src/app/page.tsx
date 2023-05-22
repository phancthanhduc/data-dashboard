"use client";
import * as React from "react";
import styled from "@emotion/styled";
import Dashboard from "@/dashboard/Dashboard";
import Login from "src/components/login/Login";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    return (
        <>
            <StyledMain>
                {session && <Dashboard />}
                {!session && <Login />}
            </StyledMain>
        </>
    );
}

const StyledMain = styled.main`
    max-width: 85rem;
    padding: 0 24px 0 80px;
    margin: auto;

    @media screen and (min-width: 1700px) {
        padding: 0 24px 0 0;
        max-width: 92rem;
    }
`;
