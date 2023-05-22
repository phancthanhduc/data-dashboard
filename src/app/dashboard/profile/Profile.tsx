"use client";
import * as React from "react";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Profile() {
    const { data: session } = useSession();

    const names = session?.user?.name ? session?.user?.name?.split(" ") : ["", ""];
    const firstName = names[0];
    const lastName = names[1];
    const emailAddress = session?.user?.email;

    const [formData, setFormData] = React.useState({
        firstName: firstName,
        lastName: lastName,
        email: emailAddress,
        password: "",
        confirmPassword: "",
        receiveEmail: false,
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: name === "receiveEmail" ? checked : value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ marginTop: "0.625rem" }}>
                Profile
            </Typography>
            <Typography variant="h5">
                Hey {session?.user?.name}, welcome to your profile page 👋
            </Typography>
            <StyledPaper>
                <StyledGrid container>
                    <Grid item xs={12} sm={8} md={12} lg={12}>
                        <AvatarWrapper>
                            <StyledAvatar src={session?.user?.image as string} />
                        </AvatarWrapper>
                    </Grid>
                    <Styledform onSubmit={handleSubmit}>
                        <Grid container spacing={3} sx={{ padding: "1rem 1rem" }}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    type="text"
                                    required
                                    fullWidth
                                    name="firstName"
                                    variant="outlined"
                                    value={formData.firstName}
                                    label={"First Name"}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField
                                    type="text"
                                    required
                                    fullWidth
                                    name="lastName"
                                    variant="outlined"
                                    value={formData.lastName}
                                    label={"Last Name"}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    type="email"
                                    required
                                    fullWidth
                                    name="email"
                                    variant="outlined"
                                    value={formData.email}
                                    label={"Email"}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    type="password"
                                    required
                                    fullWidth
                                    name="password"
                                    variant="outlined"
                                    value={formData.password}
                                    label={"Password"}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    type="password"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    variant="outlined"
                                    value={formData.confirmPassword}
                                    label={"Confirm Password"}
                                    onChange={handleFormChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="receiveEmail"
                                            checked={formData.receiveEmail}
                                            color="primary"
                                            onChange={handleFormChange}
                                        />
                                    }
                                    label={"Receive sales analytics emails"}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color={"primary"}>
                                    SAVE CHANGES
                                </Button>
                            </Grid>
                        </Grid>
                    </Styledform>
                </StyledGrid>
            </StyledPaper>
        </Box>
    );
}

const StyledPaper = styled(Paper)`
    padding: 2rem 3rem;
    margin-top: 0.625rem;
`;

const Styledform = styled.form`
    max-width: 700px;
    margin: 0 auto;
`;

const StyledAvatar = styled(Avatar)`
    width: 75px;
    height: 75px;
    margin-bottom: 1rem;
`;

const AvatarWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledGrid = styled(Grid)`
    justify-content: center;
`;

export default Profile;
