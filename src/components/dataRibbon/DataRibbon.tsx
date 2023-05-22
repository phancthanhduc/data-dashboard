import * as React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import DataCard from "../dataCard/DataCard";
import TransactionsPerDay from "@src/components/transactionsPerDay/page";
import TransactionBottom from "../transactionBottom/TransactionBottom";

function DataRibbon() {
    return (
        <>
            <StyledGrid container>
                <DataCard
                    title="Total Sales"
                    description="The totals of all Datasoft products in the current financial year
                                which is 462"
                    value="462"
                />
                <DataCard
                    title="Total Transactions"
                    description="The totals of all Datasoft transactions in the current financial year
                                which is 83"
                    value="83"
                />
                <DataCard
                    title="Total Revenue"
                    description="The totals of all Datasoft income in the current financial year
                                which is $1500000"
                    value="$1500000"
                />
                <DataCard
                    title="Avarage Items"
                    description="The avarage items per transaction of Datasoft in the current financial year
                                which is 5"
                    value="5"
                />
            </StyledGrid>
            <TransactionsPerDay />
            <TransactionBottom />
        </>
    );
}

const StyledGrid = styled(Grid)`
    display: grid;
    text-align: center;
    grid-template-columns: 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
    margin-top: 1rem;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export default DataRibbon;
