"use client";
import * as React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { MUISetupProps } from "@src/commons/typescripts";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export const MuiSetup = ({ children }: MUISetupProps) => {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );
    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    );
};
