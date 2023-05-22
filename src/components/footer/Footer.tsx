"use client";
import * as React from "react";
import styled from "@emotion/styled";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Footer() {
    const { data: session } = useSession();
    const theme = useTheme();

    const StyledLink = styled(Link)`
        color: ${theme.palette.text.primary};
    `;
    return (
        <Styledfooter>
            <StyledPaper>
                <ul role="menu">
                    <li>
                        <StyledLink href={"/"}>Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink href={"/dashboard/data"}>Data</StyledLink>
                    </li>
                    <li>
                        <StyledLink href={"/dashboard/profile"}>Profile</StyledLink>
                    </li>
                    <li>
                        <StyledLink href={"/dashboard/settings"}>Settings</StyledLink>
                    </li>
                    <li>
                        <StyledLink href={"/#termsandconditions"}>Terms & Conditions</StyledLink>
                    </li>
                    <li>
                        <StyledLink href={"/#accessibilitystatement"}>
                            Accessibility statement
                        </StyledLink>
                    </li>
                    <li>
                        <Button
                            variant="text"
                            color={session ? "error" : "success"}
                            onClick={() => (session ? signOut() : signIn("google"))}
                        >
                            {session ? "Sign Out" : "Sign In"}
                        </Button>
                    </li>
                </ul>
            </StyledPaper>
        </Styledfooter>
    );
}

const Styledfooter = styled.footer`
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    margin-top: 5rem;

    & ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        margin: auto;
        width: 100%;
    }
    & li {
        padding: 1rem;
        & a {
            text-decoration: none;
            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;

const StyledPaper = styled(Paper)`
    width: 100%;
    color: "#262626";
`;
