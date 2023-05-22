"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import DataRibbon from "@src/components/dataRibbon/page";

function Dashboard() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <DataRibbon />
            </Box>
        </>
    );
}

export default Dashboard;
