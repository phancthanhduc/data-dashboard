import * as React from "react";
import styled from "@emotion/styled";
import { IconButton, useTheme, Box, useMediaQuery, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "@/MuiSetup";

function ThemeToggleButton() {
    const mobileCheck = useMediaQuery("(min-width: 500px)");
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <StyledBox>
            {mobileCheck && <Typography>{theme.palette.mode}</Typography>}
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    display: flex;
    max-width: 150px;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: inherit;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
`;

export default ThemeToggleButton;
