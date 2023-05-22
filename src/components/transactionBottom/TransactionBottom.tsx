import * as React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DataChart from "@src/components/dataChart/page";
import { doughnutChartData } from "@src/components/mockData";

export default function TransactionBottom() {
    return (
        <StyledGrid container gap={1.5}>
            <StyledPaper>
                <p>Transaction per user type</p>
                <DataChart type="doughnut" data={doughnutChartData} />
            </StyledPaper>
            <StyledPaper>
                <p>Transaction per category type</p>
                <DataChart type="doughnut" data={doughnutChartData} />
            </StyledPaper>
            <StyledPaper>
                <p>Transaction per item type</p>
                <DataChart type="doughnut" data={doughnutChartData} />
            </StyledPaper>
            <StyledPaper>
                <p>Items per order</p>
                <DataChart type="doughnut" data={doughnutChartData} />
            </StyledPaper>
        </StyledGrid>
    );
}

const StyledGrid = styled(Grid)`
    display: grid;
    margin-top: 1.1rem;
    grip-template-columns: 1fr;

    @media screen and (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const StyledPaper = styled(Paper)`
    position: relative;
    top: 1rem;
    height: 100%;
    width: calc(100% - 0.1rem);

    & p {
        padding: 0.5rem 1rem;
        margin: 0;
    }
`;
