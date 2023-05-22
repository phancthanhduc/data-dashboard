"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "@emotion/styled";

function Settings() {
    const [showRevenue, setShowRevenue] = React.useState(true);
    const [showProfit, setShowProfit] = React.useState(true);
    const [showCustomers, setShowCustomers] = React.useState(true);
    const [showOrders, setShowOrders] = React.useState(true);
    const handleShowRevenueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowRevenue(event.target.checked);
    };
    const handleShowProfitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowProfit(event.target.checked);
    };
    const handleShowCustomersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowCustomers(event.target.checked);
    };
    const handleShowOrdersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowOrders(event.target.checked);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <StyledTypography variant="h4">Settings</StyledTypography>
            <Box>
                <StyledTypography variant="h5">Dashboard Features</StyledTypography>
                <StyledPaper>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={showRevenue}
                                                    onChange={handleShowRevenueChange}
                                                />
                                            }
                                            label="Revenue"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={showProfit}
                                                    onChange={handleShowProfitChange}
                                                />
                                            }
                                            label="Profit"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={showOrders}
                                                    onChange={handleShowOrdersChange}
                                                />
                                            }
                                            label="Orders"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={showCustomers}
                                                    onChange={handleShowCustomersChange}
                                                />
                                            }
                                            label="Customers"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary">
                                    Save Settings
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </StyledPaper>
            </Box>
        </>
    );
}

const StyledPaper = styled(Paper)`
    padding: 2rem 3rem;
    margin-top: 1rem;
    margin-bottom: 7.1rem;
`;

const StyledTypography = styled(Typography)`
    margin-top: 0.625rem;
`;

export default Settings;
