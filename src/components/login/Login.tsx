"use client";
import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
    return (
        <Button
            variant="contained"
            color="success"
            style={{ marginRight: 10 }}
            onClick={async () => await signIn("google")}
        >
            Sign in
        </Button>
    );
};

export const RegisterButton = () => {
    return (
        <Link href="/register" style={{ marginRight: 10 }}>
            Register
        </Link>
    );
};

export const LogoutButton = () => {
    return (
        <Button
            variant="contained"
            color="error"
            style={{ marginRight: 10 }}
            onClick={async () => await signOut()}
        >
            Sign Out
        </Button>
    );
};

export const ProfileButton = () => {
    return <Link href="/profile">Profile</Link>;
};

function Login() {
    const { data: session } = useSession();
    if (session) {
        return <LogoutButton />;
    }
    return <LoginButton />;
}

export default Login;
