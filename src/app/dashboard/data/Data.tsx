"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgess from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDemoData } from "@mui/x-data-grid-generator";
import styled from "@emotion/styled";
function Data() {
    const { data } = useDemoData({
        dataSet: "Commodity",
        rowLength: 500,
        maxColumns: 15,
    });
    return (
        <>
            <Typography variant="h4">Data</Typography>
            <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
            </Typography>
            <StyledBox>
                <DataGrid slots={{ loadingOverlay: LinearProgess }} loading={!data} {...data} />
            </StyledBox>
        </>
    );
}

const StyledBox = styled(Box)`
    height: 600px;
    width: 100%;
`;

export default Data;
