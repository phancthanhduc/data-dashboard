"use client";
import * as React from "react";
import { useSession } from "next-auth/react";
import SideMenu from "../sideMenu/SideMenu";

function WithUserSession() {
    const { data: session } = useSession();
    return <>{session && <SideMenu />}</>;
}

export default WithUserSession;
