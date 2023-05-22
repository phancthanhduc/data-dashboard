"use client";
import * as React from "react";
import Login from "@src/components/login/Login";
import { useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

function SignIn() {
    const { data: session } = useSession();
    return (
        <StyledBox>
            <Typography variant="h3">
                {session ? "Thank you for logging in" : "Please log in"}
            </Typography>
            <Login />
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    margin-bottom: 22rem;
`;

export default SignIn;
