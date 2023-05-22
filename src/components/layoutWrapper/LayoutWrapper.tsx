"use client";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { LayoutWrapperProps } from "@src/commons/typescripts";
import * as React from "react";

function LayoutWrapper({ children }: LayoutWrapperProps) {
    return <StyledBox>{children}</StyledBox>;
}

const StyledBox = styled(Box)`
    max-width: 85rem;
    padding: 0 24px 0 80px;
    margin: auto;

    @media screen and (min-width: 1700px) {
        padding: 0 24px 0 0;
        max-width: 92rem;
    }
`;
export default LayoutWrapper;
