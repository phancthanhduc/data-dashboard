import * as React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DataChart from "@src/components/dataChart/page";
import { lineChartData } from "@src/components/mockData";

function TransactionsPerDay() {
    const theme = useTheme();
    return (
        <StyledGrid container>
            <StyledPaper>
                <BoxChart style={{ marginTop: "40px" }}>
                    <Typography>Transactions per day</Typography>
                    <DataChart type="line" data={lineChartData} />
                </BoxChart>
                <BoxCardWrapper>
                    <StyledCard variant="outlined">
                        <BoxTitle>
                            <Typography>Total Products</Typography>
                        </BoxTitle>
                        <BoxValue>
                            <Typography>1.275</Typography>
                            <PercentageTypography color={theme.palette.success.main}>
                                428.7%
                            </PercentageTypography>
                        </BoxValue>
                    </StyledCard>
                    <StyledCard variant="outlined">
                        <BoxTitle>
                            <Typography>Total Customers</Typography>
                        </BoxTitle>
                        <BoxValue>
                            <Typography>10</Typography>
                            <PercentageTypography color={theme.palette.success.main}>
                                30%
                            </PercentageTypography>
                        </BoxValue>
                    </StyledCard>
                    <StyledCard variant="outlined">
                        <BoxTitle>
                            <Typography>Average Items</Typography>
                        </BoxTitle>
                        <BoxValue>
                            <Typography>10</Typography>
                            <PercentageTypography color={theme.palette.success.main}>
                                138.1%
                            </PercentageTypography>
                        </BoxValue>
                    </StyledCard>
                </BoxCardWrapper>
            </StyledPaper>
        </StyledGrid>
    );
}

const breakpoint = "1000px";

const StyledGrid = styled(Grid)`
    display: flex;
    margin-top: 2rem;
`;

const StyledPaper = styled(Paper)`
    display: block;
    padding: 1rem 2rem;
    width: 100%;

    @media screen and (min-width: ${breakpoint}) {
        display: flex;
    }
`;

const BoxChart = styled(Box)`
    max-width: 100%;
    width: 100%;
    @media screen and (min-width: ${breakpoint}) {
        max-width: 80%;
    }
`;

const BoxCardWrapper = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 100%;
    width: 100%;

    @media screen and (min-width: ${breakpoint}) {
        flex-direction: column;
        max-width: 20%;
    }
`;

const StyledCard = styled(Card)`
    border-radius: 8px;
    padding: 2rem;
    width: 100%;
    margin-left: 1rem;

    @media screen and (min-width: ${breakpoint}) {
        padding: 0.5rem;
    }
`;

const BoxTitle = styled(Box)`
    text-align: center;
    font-size: 1.8rem;
`;
const BoxValue = styled(Box)`
    text-align: center;
    font-size: 1.2rem;
`;
const PercentageTypography = styled(Typography)`
    font-size: 14px;
`;

export default TransactionsPerDay;
