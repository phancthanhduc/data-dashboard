"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { SettingMenu } from "@src/commons/typescripts";

const settings: SettingMenu[] = [
    { title: "Profile", link: "/dashboard/profile" },
    { title: "Dashboard", link: "/dashboard" },
    { title: "Log", signOut: signOut, signIn: signIn },
];

function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { data: session } = useSession();
    const router = useRouter();
    const tabletCheck = useMediaQuery("(min-width: 786px)");

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleRouteAndCloseMenu = (link?: string) => {
        if (link) {
            router.push(link);
        }
        setAnchorElUser(null);
    };

    const handleSignIn = (setting: SettingMenu) => {
        if (setting.signIn) {
            setting.signIn();
            handleRouteAndCloseMenu();
        }
    };
    const handleSignOut = (setting: SettingMenu) => {
        if (setting.signOut) {
            setting.signOut();
            handleRouteAndCloseMenu();
        }
    };
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        DataSoft
                    </Typography>

                    <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        DataSoft
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
                    {tabletCheck && session && (
                        <Box sx={{ paddingRight: "5px" }}>
                            <Typography>Signed in as {session?.user?.name}</Typography>
                        </Box>
                    )}
                    <ThemeToggleButton />
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open profile settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar
                                    alt={session?.user?.name as string}
                                    src={session?.user?.image as string}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={() => handleRouteAndCloseMenu()}
                        >
                            {settings.map((setting) => {
                                if (setting.signIn) {
                                    return (
                                        <MenuItem
                                            key={setting.title}
                                            onClick={() =>
                                                session?.user
                                                    ? handleSignOut(setting)
                                                    : handleSignIn(setting)
                                            }
                                        >
                                            <Typography textAlign="center">
                                                {session?.user ? "Logout" : "Login"}
                                            </Typography>
                                        </MenuItem>
                                    );
                                }
                                return (
                                    <MenuItem
                                        key={setting.title}
                                        onClick={() => handleRouteAndCloseMenu(setting.link)}
                                    >
                                        <Typography textAlign="center">{setting.title}</Typography>
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
